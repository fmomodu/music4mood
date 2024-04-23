document.addEventListener('DOMContentLoaded', function() {
  // Retrieve liked songs from sessionStorage
  const likedSongs = JSON.parse(sessionStorage.getItem('likedSongs'));

  if (likedSongs && likedSongs.length > 0) {
    const likedSongsContainer = document.getElementById('likedSongs');

    // Create HTML elements to display each liked song
    likedSongs.forEach(song => {
      const songElement = document.createElement('div');
      songElement.innerHTML = `
        <p>Title: ${song.title}</p>
        <p>Artist: ${song.artist}</p>
        <img src="${song.albumCover}" alt="Album Cover">
      `;
      likedSongsContainer.appendChild(songElement);
    });
  }
});

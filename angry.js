document.addEventListener('DOMContentLoaded', function() {
  const songs = [
    { title: 'Chanel', artist: 'Frank Ocean', albumCover: 'images/chanel.jpeg' },
    { title: 'Can You Feel My Heart', artist: 'Bring Me The Horizon', albumCover: 'images/cyfmh.jpg' },
    { title: 'Hiss', artist: 'Megan The Stallion' , albumCover: 'images/hiss.jpg' },
    // Add more songs as needed
  ];

  const songContainer = document.getElementById('song-container');
  const playlist = document.getElementById('playlist');

  let currentSongIndex = 0;

  function renderNextSong() {
    if (currentSongIndex < songs.length) {
      const song = songs[currentSongIndex];
      const songElement = createSongElement(song);
      songContainer.innerHTML = '';
      songContainer.appendChild(songElement);
      currentSongIndex++;
    } else {
      console.log('No more songs to load');
    }
  }

  function createSongElement(song) {
    const songElement = document.createElement('div');
    songElement.classList.add('song');
    songElement.innerHTML = `
      <img src="${song.albumCover}" alt="Album Cover">
      <h3>${song.title}</h3>
      <p>Artist: ${song.artist}</p>
      <button class="like-btn">Like</button>
      <button class="dislike-btn">Dislike</button>
    `;
    return songElement;
  }

  function moveSongToPlaylist(song) {
    const li = document.createElement('li');
    li.textContent = `${song.title} - ${song.artist}`;
    playlist.appendChild(li);
  }

  // Load the first song
  renderNextSong();

  // Event listener for like button
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('like-btn')) {
      const song = songs[currentSongIndex - 1];
      moveSongToPlaylist(song);
      renderNextSong();
    }
  });

  // Event listener for dislike button
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('dislike-btn')) {
      renderNextSong();
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const songs = [
    { title: 'Chanel', artist: 'Frank Ocean', albumCover: 'images/chanel.jpeg' },
    { title: 'Can You Feel My Heart', artist: 'Bring Me The Horizon', albumCover: 'images/cyfmh.jpg' },
    { title: 'Hiss', artist: 'Megan The Stallion' , albumCover: 'images/hiss.jpg' },
    { title: 'IFHY', artist: 'Tyler the Creator' , albumCover: 'images/ifhy.png' },
    { title: 'Potential Breakup Song', artist: 'Aly & AJ' , albumCover: 'images/PBS.jpg' },
    { title: 'Plan B', artist: 'Megan The Stallion' , albumCover: 'images/planb.png' },
    { title: 'Smack a Bitch', artist: 'Rico Nasty' , albumCover: 'images/sab.jpg' },
    { title: 'Washing Machine Heart', artist: 'Mitski' , albumCover: 'images/wmh.png' },
    { title: 'Supermassive Black Hole', artist: 'Muse' , albumCover: 'images/sbh.png' },
    { title: 'Green Honda', artist: 'Benee' , albumCover: 'images/gh.png' },
    // Add more songs as needed { title: '', artist: '' , albumCover: 'images/.png' },

  ];

  const songContainer = document.getElementById('song-container');
  const playlist = document.getElementById('playlist');

  const likedSongs = []; // Array to store liked songs
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
      <h3>Song:${song.title}</h3>
      <h3>Artist: ${song.artist}</h3>
      <button class="like-btn">&#x2665;</button> <!-- Unicode character for heart -->
      <button class="dislike-btn">&#x2718;</button> <!-- Unicode character for crossed-out symbol (✘) -->
    `;
    return songElement;
  }

  function moveSongToPlaylist(song) {
    const li = document.createElement('li');
    li.textContent = `${song.title} - ${song.artist}`;
    playlist.appendChild(li);
    likedSongs.push(song); // Add liked song to the array
  }

  // Load the first song
  renderNextSong();

  // Event listener for like button
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('like-btn')) {
      const song = songs[currentSongIndex - 1];
      likedSongs.push(song); // Add liked song to the array
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

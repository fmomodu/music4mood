document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: false, // Set loop to false
        pagination: {
            el: '.swiper-pagination',
        },
    });

    // Example playlist data
    const playlist = [
        { title: 'Chanel', artist: 'Frank Ocean', albumCover: 'images/chanel.jpeg' },
        { title: 'Can You Feel My Heart', artist: 'Bring Me The Horizon', albumCover: 'images/cyfmh.jpg' },
        { title: 'Hiss', artist: 'Megan The Stallion' , albumCover: 'images/hiss.jpg' },
        { title: 'Washing Machine Heart', artist: 'Mitski' , albumCover: 'images/wmh.png' },
        { title: 'Supermassive Black Hole', artist: 'Muse' , albumCover: 'images/sbh.png' },
        { title: 'Plan B', artist: 'Megan The Stallion' , albumCover: 'images/planb.png' },
        { title: 'IFHY', artist: 'Tyler The Creator' , albumCover: 'images/ifhy.png' },
        // Add more songs as needed
    ];

    // Create the Swiper slides based on the playlist
    playlist.forEach((song) => {
        // Dynamically create slide elements
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');

        // Create an img element for the album cover
        const img = document.createElement('img');
        img.src = song.albumCover;
        img.alt = song.title;

        // Append elements to the slide
        slide.appendChild(img);

        // Append the slide to the Swiper container
        swiper.appendSlide(slide);
    });
});

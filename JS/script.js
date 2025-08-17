AOS.init();

$('.carousel-testimonial').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: true,
            loop: false
        }
    }
})

function loadVideo() {
    document.getElementById("video-container").innerHTML = `
    <iframe height="315" width="100%" src="https://www.youtube.com/embed/videoseries?si=QVyaNak1W3KyHhPq&list=PLeHGxnjJVSZ52AY4HB95nTnKiw8vehgaI" title="YouTube Playlist" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    document.querySelector(".video-thumbnail").style.display = "none";
}

function loadVideo() {
    document.getElementById("video-container2").innerHTML = `
    <iframe height="315" width="100%" src="https://www.youtube.com/embed/videoseries?si=CtuX5tSPmnqGJPhL&list=PLeHGxnjJVSZ7v1S6FIfVkHXB-P5ui_t64" title="YouTube Playlist" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    document.querySelector(".video-thumbnail").style.display = "none";
}


document.getElementById('year').textContent = new Date().getFullYear();
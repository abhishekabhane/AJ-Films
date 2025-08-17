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

function loadVideo(containerId, videoId) {
    const container = document.getElementById(containerId);
    container.innerHTML = `
    <iframe width="100%" height="315"
      src="https://www.youtube.com/embed/${videoId}?autoplay=1"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  `;
    container.previousElementSibling.style.display = "none";
}


document.getElementById('year').textContent = new Date().getFullYear();
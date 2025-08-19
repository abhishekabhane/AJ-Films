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
    document.querySelectorAll(".video-wrapper").forEach(wrapper => {
        const thumb = wrapper.querySelector(".video-thumbnail, .video-thumbnail2");
        const iframeContainer = wrapper.querySelector("div[id^='video']");

        if (iframeContainer) {
            iframeContainer.innerHTML = "";
        }
        if (thumb) {
            thumb.style.display = "block";
            thumb.style.transition = "ease-in-out 1s";
        }
    });

    setTimeout(() => {
        const container = document.getElementById(containerId);
        container.innerHTML = `
      <div class="video-container">
        <iframe
          src="https://www.youtube.com/embed/${videoId}?autoplay=1"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
    `;
        container.previousElementSibling.style.display = "none";
    }, 500);

}

const scriptURL = "https://script.google.com/macros/s/AKfycbx84qCxBrRt3NX9PAO8c0htA-AsCQrBrzEwXzNnt_xAHBqC0oF3canGIzQAYk5OJEo8Jw/exec"; // paste your Apps Script web app URL

document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    fetch(scriptURL, { method: "POST", body: formData })
        .then(res => res.text())
        .then(data => {
            document.getElementById("success-message").style.display = "block";
            e.target.reset();
        })
        .catch(err => {
            alert("Error: " + err.message);
        });
});

const menuToggle = document.querySelector('.menu-toggle');
const panel = document.getElementById('nav-panel');
const closeBtn = panel.querySelector('.close-btn');
const links = panel.querySelectorAll('a');

function openMenu() {
    panel.classList.add('open');
    panel.setAttribute('aria-hidden', 'false');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    panel.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

menuToggle.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

links.forEach(a => {
    a.addEventListener('click', () => {
        if (window.matchMedia('(max-width: 991.98px)').matches) closeMenu();
    });
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
});

window.addEventListener('resize', () => {
    if (!window.matchMedia('(max-width: 991.98px)').matches) closeMenu();
});

document.getElementById('year').textContent = new Date().getFullYear();
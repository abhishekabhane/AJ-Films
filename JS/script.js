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
      <iframe width="100%" height="315"
        src="https://www.youtube.com/embed/${videoId}?autoplay=1"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    `;
        container.previousElementSibling.style.display = "none";
    }, 500);
}

// document.getElementById("myForm").addEventListener("submit", function(e) {
//     e.preventDefault();
//     fetch("https://script.google.com/macros/s/AKfycbxnPbBvRU8Hn3A9hrr8ENHT7MsPvzemXCuapeQtPDIGz8jtoptYLCZXurUMn3eUloL1/exec", {
//         method: "POST",
//         body: JSON.stringify({
//             name: e.target.name.value,
//             email: e.target.email.value,
//             message: e.target.message.value
//         }),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     }).then(res => alert("Form submitted!"));
// });

// document.getElementById("myForm").addEventListener("submit", function(e) {
//     e.preventDefault();

//     const formData = new FormData(e.target);

//     fetch("https://script.google.com/macros/s/AKfycbygIXl59x9VZClLR6e4sqhbiB0BXwgZHzBd6gvA-BX5IJ1hAkL_BqmXQDGKrtyJOMulkg/exec", {
//             method: "POST",
//             body: formData
//         })
//         .then(res => res.text())
//         .then(data => {
//             alert("Form submitted successfully!");
//             e.target.reset();
//         })
//         .catch(err => alert("Error: " + err.message));
// });

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


document.getElementById('year').textContent = new Date().getFullYear();
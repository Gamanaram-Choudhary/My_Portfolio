// var typed = new typed(".text", {
//   strings: ["Fronted Devloper", "YouTuber", "Web Developer"],
//   typeSpeed: 100,
//   backSpeed: 100,
//   backDelay: 1000,
//   loop: true,
// });

var typed = new Typed(".text", {
  strings: ["Web Developer", "Programmer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

window.onscroll = function () {
  toggleBackToTopButton();
};

function toggleBackToTopButton() {
  var button = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

// Scroll to the top of the page with a slow and smooth transition
function scrollToTop() {
  const scrollToTop = window.setInterval(function () {
    const pos = window.pageYOffset;
    if (pos > 0) {
      window.scrollTo(0, pos - 50); // Adjust the decrement value for the desired speed
    } else {
      window.clearInterval(scrollToTop);
    }
  }, 16); // Adjust the interval for the desired smoothness
}

// var typed = new typed(".text", {
//   Strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
//   typeSpeed: 50,
// });

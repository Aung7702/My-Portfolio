$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
      $("nav").css({
        transition: "400ms ease-out",
      });
    }
  });
});

// Carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 2,
      },
    },
  });
  $(".btn").hover(function () {
    $(".image").css({
      opacity: 1,
      transition: "200ms",
    });
  });
});
// $(document).ready(function () {
//   $(".progress-bar").each(function () {
//     $(this).animate(
//       {
//         width: $(this).attr("aria-valuenow") + "%",
//         transition: "3ms ease-in-out",
//       },
//       3000
//     );
//   });
// });
const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav-ul");
const icon = document.getElementsByTagName("i")[0];

hamburger.addEventListener("click", () => {
  navUl.classList.toggle("show");
  icon.classList.toggle("fa-times");
  icon.style.transition("0.5s");
});

const transitionTextTag = document.querySelector(".transitiontext");
const transitionDivTag = document.querySelector(".transition");
transitionTextTag.addEventListener("mouseover", () => {
  transitionDivTag.classList.add("starttransition");
});

const transitionTextCssTag = document.querySelector(".transitiontextcss");
const transitionDivCssTag = document.querySelector(".transitioncss");
transitionTextCssTag.addEventListener("mouseover", () => {
  transitionDivCssTag.classList.add("starttransitioncss");
});

const transitionTextJsTag = document.querySelector(".transitiontextjs");
const transitionDivJsTag = document.querySelector(".transitionjs");
transitionTextJsTag.addEventListener("mouseover", () => {
  transitionDivJsTag.classList.add("starttransitionjs");
});

const transitionTextBsTag = document.querySelector(".transitiontextbs");
const transitionDivBsTag = document.querySelector(".transitionbs");
transitionTextBsTag.addEventListener("mouseover", () => {
  transitionDivBsTag.classList.add("starttransitionbs");
});

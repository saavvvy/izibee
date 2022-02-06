// START OWL CAROUSEL

$(document).ready(function () {
  // HERO SLIDER
  $("#hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false, // hide the dots
    items: 1, // show only one slide
    smartSpeed: 1000,
    navText: ["PREV", "NEXT"],
    responsive: {
      0: {},
      600: {},
      1000: {},
    },
  });
});

// END OWL CAROUSEL

// START COUNTER UP

$(document).ready(function () {
  $(".count").counterUp({
    delay: 10,
    time: 1200,
  });
});

// END COUNTER UP

// START LAUNCH

// Initiate a countdown
// var countDownDate = new Date("Feb 15, 2022 00:00:00").getTime();
// var x = setInterval(function () {
//   var now = new Date().getTime();
//   var dist = countDownDate - now;

//   var days = Math.floor(dist / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((dist % (1000 * 60)) / 1000);

//   document.getElementById("launch").innerHTML =
//     days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

//   if (dist < 0) {
//     clearInterval(x);
//     document.getElementById("launch").innerHTML = "EXPIRED";
//   }
// }, 1000);

// END LAUNCH

// START SLICK CAROUSEL

$(".slider").slick({
  centerMode: true,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 998,
      settings: {
        arrows: false,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

// END SLICK CAROUSEL


// START YEAR CHANGER

var year = new Date().getFullYear();
var date = `&#169 ${year}`;
document.querySelector(".year").innerHTML = date;

// END YEAR CHANGER
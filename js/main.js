(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  // let offer= "Dec 31, 2021 00:00:00",
  let offer = new Date();
  offer = offer.setDate(offer.getDate() + 2);

  countDown = new Date(offer).getTime(),
    x = setInterval(function () {

      let now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById("days").innerText = '0' + Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      if (distance < 0) {
        let headline = document.getElementById("headline"),
          countdown = document.getElementById("countdown"),
          content = document.getElementById("content");

        headline.innerText = "Ohhh no! Offer has ended";
        countdown.style.display = "none";
        content.style.display = "block";

        clearInterval(x);
      }
      //seconds
    }, 0)
}());

$('.counter').counterUp({
  delay: 10,
  time: 3000
});
$('.counter').addClass('animated fadeInDownBig');
$('h3').addClass('animated fadeIn');


$('.owl-carousel').owlCarousel({
  // stagePadding: 20,
  loop: true,
  margin: 10,
  nav: false,
  autoplayHoverPause: true,
  autoplayTimeout: 2000,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
      // stagePadding: 60
    },
    600: {
      items: 3,
      // stagePadding: 100
    },
    1000: {
      items: 4,
      // stagePadding: 200
    }
  }
})
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

AOS.init();

const header = document.querySelector(".header");
const handleScroll = (_) => {
  if (window.pageYOffset > 25) {
    header.classList.add("header-active");
  } else {
    header.classList.remove("header-active");
  }
};
window.addEventListener("scroll", handleScroll);

const myButton = document.querySelector("#myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// const sectionOne = document.querySelector("#observer");
// const options = {
//   root: null,
//   threshold: 0,
//   rootMargin: "10px",
// };

// const observer = new IntersectionObserver((entries, observer) => {
//   const interSecting = entries[0].isIntersecting;
//   if (interSecting) {
//     rightBox.classList.remove("active");
//   } else {
//     rightBox.classList.add("active");
//   }
// });

// observer.observe(sectionOne);





// const popupCounter = (number = 100, format = "seconds") => {
//   const d = document;

//   // const hoursElement = d.querySelector(".hour-time");
//   const minutesElement = d.querySelector(".minute-time");
//   const secondsElement = d.querySelector(".second-time");
//   let countdown;
//   convertFormat(format);

//   function convertFormat(format) {
//     switch (format) {
//       case "seconds":
//         return timer(number);
//       case "minutes":
//         return timer(number * 60);
//       // case "hours":
//       //   return timer(number * 60 * 60);
//     }
//   }

//   function timer(seconds) {
//     const now = Date.now();
//     const then = now + seconds * 1000;

//     countdown = setInterval(() => {
//       const secondsLeft = Math.round((then - Date.now()) / 1000);

//       if (secondsLeft <= 0) {
//         clearInterval(countdown);
//         return;
//       }

//       displayTimeLeft(secondsLeft);
//     }, 1000);
//   }

//   function displayTimeLeft(seconds) {
//     // hoursElement.textContent =  +Math.floor((seconds % 86400) / 3600);
//     minutesElement.textContent = Math.floor(((seconds % 86400) % 3600) / 60);
//     secondsElement.textContent =
//       seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
//   }
// };

// popupCounter(30, "minutes");




// const popClocks = (number = 100, format = "seconds") => {
//   const d = document;
//   const minutesElement = d.querySelector(".popup-minute");
//   const secondsElement = d.querySelector(".popup-second");
//   let countdown;
//   convertFormat(format);

//   function convertFormat(format) {
//     switch (format) {
//       case "seconds":
//         return timer(number);
//       case "minutes":
//         return timer(number * 60);
//     }
//   }

//   function timer(seconds) {
//     const now = Date.now();
//     const then = now + seconds * 1000;

//     countdown = setInterval(() => {
//       const secondsLeft = Math.round((then - Date.now()) / 1000);

//       if (secondsLeft <= 0) {
//         clearInterval(countdown);
//         return;
//       }

//       displayTimeLeft(secondsLeft);
//     }, 1000);
//   }

//   function displayTimeLeft(seconds) {
//     minutesElement.innerHTML = Math.floor(((seconds % 86400) % 3600) / 60);
//     secondsElement.innerHTML =
//       seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
//   }
// };

// popClocks(30, "minutes");

// date time

// const date_time = document.querySelector(".date");
// const d = new Date();
// const curr_date = d.getDate();
// const curr_month = d.getMonth() + 1; //Months are zero based
// const curr_year = d.getFullYear();
// const date = (`${curr_year}/${curr_month}/${curr_date}`);

// date_time.innerText = date

// const card_popup = document.querySelector(".popup-card");
// const close_btn = document.querySelector(".close");
// const current_btn = document.querySelector(".current-page");
// const overlay = document.querySelector(".overlay");
// const overlay_show = document.querySelector(".overlay-show");

// window.addEventListener("load", function () {
//   popupShow(20000);
// });

// function popupShow(time) {
//   setTimeout(function () {
//     card_popup.classList.add("show");
//     overlay.classList.add("overlay-show");
//   }, time);
// }

// close_btn.addEventListener("click", function () {
//   card_popup.classList.remove("show");
//   overlay.classList.remove("overlay-show");
// });

// document.addEventListener("click", function () {
//   card_popup.classList.remove("show");
//   overlay.classList.remove("overlay-show");
// });

// const video_player = document.querySelector(".video-player");
// const video_overlay = document.querySelector(".video-overlay");

// document.addEventListener("click", function () {
//   video_overlay.style.display = "none";
// });
// const phone_box = document.querySelector(".phone-img");
// phone_box.addEventListener("click", function(){
//   console.log('clicked :>> ', clicked);
// })


// setTimeout(function () {
//   let popup = window.open(
//     "index1.html",
//     "_blank",

//     "width=" +
//       window.screen.availWidth +
//       ",height=" +
//       window.screen.availHeight +
//       ",toolbar=1,scrollbars=1,status=1,resizable=1, behavior: smooth,"
//   ).blur();
//   window.open().close();
//   window.focus()
//   return (popup)?false:true;

// });

// First
function currentTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let session = "AM";

  if (hours == 0) {
    hours = 12;
  }
  if (hours > 12) {
    hours -= 12;
    session = "PM";
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let time = `${hours}:${minutes}:${seconds} ${session}`;

  document.getElementById("clock").innerText = time;
  let t = setTimeout(function () {
    currentTime();
  }, 1000);
}
currentTime();

//Second

const nextBtn = document.querySelector("#next"),
  prevBtn = document.querySelector("#prev"),
  sliders = document.querySelectorAll(".slider-item"),
  startAutoSliding = document.querySelector("#start-auto"),
  stopAutoSliding = document.querySelector("#stop-auto");

// საწყისი activeIndex
let activeIndex = 0;

console.log("sliders", sliders);

function initSlider() {
  // next prev ღილაკებზე ლისენერის დამატება
  nextBtn.addEventListener("click", showNextSlide);
  prevBtn.addEventListener("click", showPrevSlide);

  // ერთ-ერთ სლაიდზე active კლასის დამატება activeIndex-ის მიხედვით
  renderSlides();

  // კლავიატურის ღილაკებზე მოსმენა
  document.addEventListener("keyup", (e) => {
    console.log(e);
    // e.code გვიბრუნდებს შესაბამისი ღილაკის შესახებ ინფორმაციას
    if (e.code === "ArrowLeft") {
      showNextSlide();
    }
  });
}

// activeIndex (0, 1, ან 2) ინდექსის მქონე სლაიდზე ამატებს active კლასს, დანარჩენებზე შლის
function renderSlides() {
  console.log("activeIndex", activeIndex);
  sliders.forEach((slide, i) => {
    if (i === activeIndex) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

//
function showNextSlide() {
  // console.log("next");
  // activeIndex ის მნიშვნელობის გაზრდა და ვამოწმებთ ეს ინდექსი (სლაიდების რაოდენობას - 1)-ზე მეტი ხომ არაა
  if (activeIndex === sliders.length - 1) {
    activeIndex = 0;
  } else {
    activeIndex++;
  }
  //  active კლასის ხელახლა დამატება შესაბამის ელემენტზე
  renderSlides();
}

function showPrevSlide() {
  // console.log("prevBtn");
  // activeIndex ის მნიშვნელობის შემცირება და ვამოწმებთ ეს ინდექსი 0-ზე ნაკლები ხომ არაა
  if (activeIndex === 0) {
    activeIndex = sliders.length - 1;
  } else {
    activeIndex--;
  }
  //  active კლასის ხელახლა დამატება შესაბამის ელემენტზე
  renderSlides();
}

// COMMENT autosliding
// id სლაიდერის ინტერვალისთვის
// let autoSlidingId = null;

function startIntervalFnSlider() {
  // ეს კოდი შესრულდება ყოველ 3 წამში (3000 მილიწამში)
  autoSlidingId = setInterval(showNextSlide, 3000);
}

// autosliding -ის შეჩერება
function stopIntervalFnSlider() {
  clearInterval(autoSlidingId);
}

// // autosliding-ის დამატება შესაბამის ღილაკებზე
startAutoSliding.addEventListener("click", startIntervalFnSlider);
stopAutoSliding.addEventListener("click", stopIntervalFnSlider);
let sliderCard = document.querySelector(".sliter_item");
// sliderCard.addEventListener("mouseenter", stopAutoSliding);
// sliderCard.addEventListener("mouseleave", startIntervalFnSlider);
function sliderStopper() {
  while (startAutoSliding)
    if (sliderCard.addEventListener("mouseenter", stopAutoSliding)) {
      stopAutoSliding();
    }
  if (sliderCard.addEventListener("mouseleave", startAutoSliding)) {
    startAutoSliding();
  }
}

let firstbtn = document.querySelector(".button1");
let secondbtn = document.querySelector(".button2");
let thirdbtn = document.querySelector(".button3");
let myArray = document.querySelectorAll(".slider-item");
let first = myArray[0];
let second = myArray[1];
let third = myArray[2];
// firstbtn.setAttribute("href", first);
// secondbtn.setAttribute("href", second);
// thirdbtn.setAttribute("href", third);
// console.log(firstbtn);

function buttons() {
  if (firstbtn.addEventListener("click")) {
    first.setAttribute("class", "active");
  }
  if (secondbtn.addEventListener("click")) {
    second.setAttribute("class", "active");
  }
  if (thirdbtn.addEventListener("click")) {
    third.setAttribute("class", "active");
  }
}

// // სლაიდერის დარენდერება საიტის ჩატვირთვისას

initSlider();
// sliderStopper();

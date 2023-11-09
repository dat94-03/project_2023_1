const translate = document.querySelector(".translate");
const translateArr = [
  "எதீரியம்",
  "Эфириум",
  "Etérium",
  "イーサリアム",
  "Ethereum",
  "Ξ",
  "اتریوم",
  "ఇథిరియూమ్",
  "อีเธอเรียม",
  "ইথেরিয়াম",
  "etérea",
  "Эфириум",
  "...",
];
console.log(translateArr.length);
let x = 0;
setInterval(function () {
  translate.innerHTML = translateArr[x];
  x++;
  if (x >= translateArr.length) x = 0;
}, 2500);


const registerLink = document.querySelector('.register-link');
const register = document.querySelector(".register");
const login = document.querySelector(".login");
const loginLink = document.querySelector(".login-link");

registerLink.addEventListener('click', () => {
  login.classList.add('active');
  register.classList.remove('register2');
})
loginLink.addEventListener('click', ()=> {
  login.classList.remove('active');
  register.classList.add("register2");
})

const closeIcon = document.querySelector('.icon-close');
const wrapper = document.querySelector('.wrapper');
const openlogin = document.querySelector(".btn-login");
const openlogin2 = document.querySelector(".home-content-desc");

closeIcon.addEventListener('click', () => {
  wrapper.classList.add('active');
  openlogin2.classList.remove('active');
}) 



openlogin.addEventListener('click', ()=> {
  wrapper.classList.remove("active");
  openlogin2.classList.add('active');
})


// ================== new feeds swiper =========
let mySwiper = new Swiper(".new-swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  centerSlide: 'true',
  loop: 'true',  
  // autoplay: {
  //   delay: 2000
  // },
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

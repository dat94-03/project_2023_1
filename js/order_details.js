let header = document.querySelector('.header') ;
function detectScroll() {
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop != 0) {
    header.classList.add('header-active') ;
  }
  else {
    header.classList.remove('header-active') ;
  }
}
let linkTo_user_information = document.querySelector('.link-user-information') ;
let linkTo_exit = document.querySelector('.link-exit') ;
linkTo_user_information.addEventListener('click', () => {
  window.location.href = "user_information.html"
}) 
linkTo_exit.addEventListener('click',() => {
  window.location.href = "index.html"
})
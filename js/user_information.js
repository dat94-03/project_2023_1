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
let linkTo_order_details = document.querySelector('.link-order-details') ;
let linkTo_exit = document.querySelector('.link-exit') ;
linkTo_order_details.addEventListener('click', () => {
  window.location.href = "order_details.html"
}) 
linkTo_exit.addEventListener('click',() => {
  window.location.href = "index.html"
})
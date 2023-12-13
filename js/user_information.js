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
let user_picture = document.querySelector('.user-pic') ;
      let menu = document.querySelector('.sub-menu-wrap') ;
      user_picture.addEventListener('click',() => {
         menu.classList.toggle('open-menu') ;
      })
let user_information = document.querySelector('.user-information') ;
let user_order = document.querySelector('.user-order') ;
let user_logout = document.querySelector('.user-logout') ;

user_order.addEventListener('click', () => {
   window.location.href="order_details.html"  ; 
})

user_information.addEventListener('click', () => {
  window.location.href="user_information.html"  ; 
})

user_logout.addEventListener('click', () => {
  window.location.href="index.html"  ; 
})
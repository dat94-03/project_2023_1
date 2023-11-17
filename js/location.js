let haNoi = document.querySelector('.hanoi') ;
let tpHCM = document.querySelector('.tphcm') ;
let ninhBinh = document.querySelector('.ninhbinh') ;
let ngheAn = document.querySelector('.nghean') ;
let nhaTrang = document.querySelector('.nhatrang') ;
let container = document.querySelector('.loc-container') ;
let changePages = document.querySelectorAll('.appear') ;
let checkHN = 1 ;
let checkHCM = 0 ;
let checkNB = 0 ;
let checkNA = 0 ;
let checkNT = 0 ;
let html1 = `<div class="loc">
<div class="div-img">
<img src="../địa điểm/địa điểm/1.png">
<div class="appear">ĐẶT BÀN</div>
</div>
<div class="information">
  <div class="location-inf">
    <i class="fa-solid fa-location-dot"></i>
    <span>1 Ngõ 72 Trần Đại Nghĩa</span>
  </div>
  <div class="phone-inf">
    <i class="fa-solid fa-phone-volume"></i>
    <span>1900 6096</span>
  </div>
  <div class="time-inf">
    <i class="fa-solid fa-calendar-days"></i>
    <span>7:00 - 23:00</span>
  </div>
</div>
</div>


<div class="loc">
<div class="div-img">
<img src="../địa điểm/địa điểm/2.jpg">
<div class="appear">ĐẶT BÀN</div>
</div>
<div class="information">
  <div class="location-inf">
    <i class="fa-solid fa-location-dot"></i>
    <span>7 Thái Hà, Trung Liệt</span>
  </div>
  <div class="phone-inf">
    <i class="fa-solid fa-phone-volume"></i>
    <span>1900 6096</span>
  </div>
  <div class="time-inf">
    <i class="fa-solid fa-calendar-days"></i>
    <span>7:00 - 23:00</span>
  </div>
</div>
</div>


<div class="loc">
<div class="div-img">
<img src="../địa điểm/địa điểm/3.png">
<div class="appear">ĐẶT BÀN</div>
</div>
<div class="information">
  <div class="location-inf">
    <i class="fa-solid fa-location-dot"></i>
    <span>352 Giải Phóng, Phương Liệt</span>
  </div>
  <div class="phone-inf">
    <i class="fa-solid fa-phone-volume"></i>
    <span>1900 6096</span>
  </div>
  <div class="time-inf">
    <i class="fa-solid fa-calendar-days"></i>
    <span>7:00 - 23:00</span>
  </div>
</div>
</div>


<div class="loc">
<div class="div-img">
<img src="../địa điểm/địa điểm/4.png">
<div class="appear">ĐẶT BÀN</div>
</div>
<div class="information">
  <div class="location-inf">
    <i class="fa-solid fa-location-dot"></i>
    <span>86 Ngõ Giếng, Hoàng Cầu</span>
  </div>
  <div class="phone-inf">
    <i class="fa-solid fa-phone-volume"></i>
    <span>1900 6096</span>
  </div>
  <div class="time-inf">
    <i class="fa-solid fa-calendar-days"></i>
    <span>7:00 - 23:00</span>
  </div>
</div>
</div>

<div class="loc">
<div class="div-img">
<img src="../địa điểm/địa điểm/5.png">
<div class="appear">ĐẶT BÀN</div>
</div>
<div class="information">
  <div class="location-inf">
    <i class="fa-solid fa-location-dot"></i>
    <span>269 Kim Ngưu, Hai Bà Trưng</span>
  </div>
  <div class="phone-inf">
    <i class="fa-solid fa-phone-volume"></i>
    <span>1900 6096</span>
  </div>
  <div class="time-inf">
    <i class="fa-solid fa-calendar-days"></i>
    <span>7:00 - 23:00</span>
  </div>
</div>
</div>


<div class="loc">
<div class="div-img">
<img src="../địa điểm/địa điểm/6.jpg">
<div class="appear">ĐẶT BÀN</div>
</div>
<div class="information">
  <div class="location-inf">
    <i class="fa-solid fa-location-dot"></i>
    <span>139 Lò Đúc, Hai Bà Trưng</span>
  </div>
  <div class="phone-inf">
    <i class="fa-solid fa-phone-volume"></i>
    <span>1900 6096</span>
  </div>
  <div class="time-inf">
    <i class="fa-solid fa-calendar-days"></i>
    <span>7:00 - 23:00</span>
  </div>
</div>
</div>

<div class="loc">
<div class="div-img">
<img src="../địa điểm/địa điểm/7.jpg">
<div class="appear">ĐẶT BÀN</div>
</div>
<div class="information">
  <div class="location-inf">
    <i class="fa-solid fa-location-dot"></i>
    <span>Số 1 Đại Cồ Việt</span>
  </div>
  <div class="phone-inf">
    <i class="fa-solid fa-phone-volume"></i>
    <span>1900 6096</span>
  </div>
  <div class="time-inf">
    <i class="fa-solid fa-calendar-days"></i>
    <span>7:00 - 23:00</span>
  </div>
</div>
</div>`; ; 


let html2 = `  <div class="loc">
<div class="div-img">
<img src="../địa điểm/địa điểm/8.jpg">
<div class="appear">ĐẶT BÀN</div>
</div>
<div class="information">
  <div class="location-inf">
    <i class="fa-solid fa-location-dot"></i>
    <span>72 Lý Tự Trọng, Quận 1</span>
  </div>
  <div class="phone-inf">
    <i class="fa-solid fa-phone-volume"></i>
    <span>1900 6096</span>
  </div>
  <div class="time-inf">
    <i class="fa-solid fa-calendar-days"></i>
    <span>7:00 - 23:00</span>
  </div>
</div>
</div>


<div class="loc">
<div class="div-img">
<img src="../địa điểm/địa điểm/9.webp">
<div class="appear">ĐẶT BÀN</div>
</div>
<div class="information">
  <div class="location-inf">
    <i class="fa-solid fa-location-dot"></i>
    <span>175b Cao Thắng, Quận 10</span>
  </div>
  <div class="phone-inf">
    <i class="fa-solid fa-phone-volume"></i>
    <span>1900 6096</span>
  </div>
  <div class="time-inf">
    <i class="fa-solid fa-calendar-days"></i>
    <span>7:00 - 23:00</span>
  </div>
</div>
</div>


<div class="loc">
<div class="div-img">
<img src="../địa điểm/địa điểm/10.jpg">
<div class="appear">ĐẶT BÀN</div>
</div>
<div class="information">
  <div class="location-inf">
    <i class="fa-solid fa-location-dot"></i>
    <span>2864 Phạm Thế Hiển, Quận 8</span>
  </div>
  <div class="phone-inf">
    <i class="fa-solid fa-phone-volume"></i>
    <span>1900 6096</span>
  </div>
  <div class="time-inf">
    <i class="fa-solid fa-calendar-days"></i>
    <span>7:00 - 23:00</span>
  </div>
</div>
</div>`; ;

let html3 = `  <div class="loc">
<div class="div-img">
<img src="../địa điểm/địa điểm/11.jpg">
<div class="appear">ĐẶT BÀN</div>
</div>
<div class="information">
  <div class="location-inf">
    <i class="fa-solid fa-location-dot"></i>
    <span>64 Cù Chính Lan, Nhật Tân</span>
  </div>
  <div class="phone-inf">
    <i class="fa-solid fa-phone-volume"></i>
    <span>1900 6096</span>
  </div>
  <div class="time-inf">
    <i class="fa-solid fa-calendar-days"></i>
    <span>7:00 - 23:00</span>
  </div>
</div>
</div>


<div class="loc">
<div class="div-img">
<img src="../địa điểm/địa điểm/12.jpg">
<div class="appear">ĐẶT BÀN</div>
</div>
<div class="information">
  <div class="location-inf">
    <i class="fa-solid fa-location-dot"></i>
    <span>7WM5+P8H, Trường Yên</span>
  </div>
  <div class="phone-inf">
    <i class="fa-solid fa-phone-volume"></i>
    <span>1900 6096</span>
  </div>
  <div class="time-inf">
    <i class="fa-solid fa-calendar-days"></i>
    <span>7:00 - 23:00</span>
  </div>
</div>
</div>`; ; 

haNoi.addEventListener('click', () => {
  if(checkHN===0) {
      container.innerHTML = html1 ;
      checkHN = 1 ; 
      haNoi.classList.add('active')  ;
      changePages.forEach(function(changePage) {
        changePage.addEventListener('click',() => {
          window.location.href = 'order.html';
        }) ;
      }) ;
  }
  if(checkHCM === 1) {
    checkHCM = 0 ;
    tpHCM.classList.remove('active')
  }
  if(checkNB === 1) {
    checkNB = 0 ;
    ninhBinh.classList.remove('active')
  }
  if(checkNA === 1) {
    checkNA = 0 ;
    ngheAn.classList.remove('active')
  }
  if(checkNT === 1) {
    checkNT = 0 ;
    nhaTrang.classList.remove('active')
  }
})

tpHCM.addEventListener('click', () => {
  if(checkHCM===0) {
      container.innerHTML = html2 ;
      checkHCM = 1 ; 
      tpHCM.classList.add('active')  ;
      let changePages = document.querySelectorAll('.appear') ;
      changePages.forEach(function(changePage) {
        changePage.addEventListener('click',() => {
          window.location.href = 'order.html';
        }) ;
      }) ;
  }
  if(checkHN === 1) {
    checkHN = 0 ;
    haNoi.classList.remove('active')
  }
  if(checkNB === 1) {
    checkNB = 0 ;
    ninhBinh.classList.remove('active')
  }
  if(checkNA === 1) {
    checkNA = 0 ;
    ngheAn.classList.remove('active')
  }
  if(checkNT === 1) {
    checkNT = 0 ;
    nhaTrang.classList.remove('active')
  }
})


ninhBinh.addEventListener('click', () => {
  if(checkNB===0) {
      container.innerHTML = html3 ;
      checkNB = 1 ; 
      ninhBinh.classList.add('active')  ;
      let changePages = document.querySelectorAll('.appear') ;
      changePages.forEach(function(changePage) {
        changePage.addEventListener('click',() => {
          window.location.href = 'order.html';
        }) ;
      }) ;
  }
  if(checkHN === 1) {
    checkHN = 0 ;
    haNoi.classList.remove('active')
  }
  if(checkHCM === 1) {
    checkHCM = 0 ;
    tpHCM.classList.remove('active')
  }
  if(checkNA === 1) {
    checkNA = 0 ;
    ngheAn.classList.remove('active')
  }
  if(checkNT === 1) {
    checkNT = 0 ;
    nhaTrang.classList.remove('active')
  }
})


ngheAn.addEventListener('click', () => {
  if(checkNA===0) {
      container.innerHTML = html3 ;
      checkNA = 1 ; 
      ngheAn.classList.add('active')  ;
      let changePages = document.querySelectorAll('.appear') ;
      changePages.forEach(function(changePage) {
        changePage.addEventListener('click',() => {
          window.location.href = 'order.html';
        }) ;
      }) ;
  }
  if(checkHN === 1) {
    checkHN = 0 ;
    haNoi.classList.remove('active')
  }
  if(checkHCM === 1) {
    checkHCM = 0 ;
    tpHCM.classList.remove('active')
  }
  if(checkNB === 1) {
    checkNB = 0 ;
    ninhBinh.classList.remove('active')
  }
  if(checkNT === 1) {
    checkNT = 0 ;
    nhaTrang.classList.remove('active')
  }
})

nhaTrang.addEventListener('click', () => {
  if(checkNT===0) {
      container.innerHTML = html3 ;
      checkNT = 1 ; 
      nhaTrang.classList.add('active')  ;
      let changePages = document.querySelectorAll('.appear') ;
      changePages.forEach(function(changePage) {
        changePage.addEventListener('click',() => {
          window.location.href = 'order.html';
        }) ;
      }) ;
  }
  if(checkHN === 1) {
    checkHN = 0 ;
    haNoi.classList.remove('active')
  }
  if(checkHCM === 1) {
    checkHCM = 0 ;
    tpHCM.classList.remove('active')
  }
  if(checkNA === 1) {
    checkNA = 0 ;
    ngheAn.classList.remove('active')
  }
  if(checkNB === 1) {
    checkNB = 0 ;
    ninhBinh.classList.remove('active')
  }
})


changePages.forEach(function(changePage) {
  changePage.addEventListener('click',() => {
    window.location.href = 'order.html';
  })
})
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
<img src="../img/Bida-quan.jpg">
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
    <span>16:00 - 1:00</span>
  </div>
</div>
</div>


<div class="loc">
<div class="div-img">
<img src="../img/Bida-quan.jpg">
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
    <span>16:00 - 1:00</span>
  </div>
</div>
</div>


<div class="loc">
<div class="div-img">
<img src="../img/Bida-quan.jpg">
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
    <span>16:00 - 1:00</span>
  </div>
</div>
</div>


<div class="loc">
<div class="div-img">
<img src="../img/Bida-quan.jpg">
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
    <span>16:00 - 1:00</span>
  </div>
</div>
</div>

<div class="loc">
<div class="div-img">
<img src="../img/Bida-quan.jpg">
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
    <span>16:00 - 1:00</span>
  </div>
</div>
</div>


<div class="loc">
<div class="div-img">
<img src="../img/Bida-quan.jpg">
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
    <span>16:00 - 1:00</span>
  </div>
</div>
</div>

<div class="loc">
<div class="div-img">
<img src="../img/Bida-quan.jpg">
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
    <span>16:00 - 1:00</span>
  </div>
</div>
</div>`; ; 


let html2 = `  <div class="loc">
<div class="div-img">
<img src="../img/Bida-quan.jpg">
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
    <span>16:00 - 1:00</span>
  </div>
</div>
</div>


<div class="loc">
<div class="div-img">
<img src="../img/Bida-quan.jpg">
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
    <span>16:00 - 1:00</span>
  </div>
</div>
</div>


<div class="loc">
<div class="div-img">
<img src="../img/Bida-quan.jpg">
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
    <span>16:00 - 1:00</span>
  </div>
</div>
</div>`; ;

let html3 = `  <div class="loc">
<div class="div-img">
<img src="../img/Bida-quan.jpg">
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
    <span>16:00 - 1:00</span>
  </div>
</div>
</div>


<div class="loc">
<div class="div-img">
<img src="../img/Bida-quan.jpg">
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
    <span>16:00 - 1:00</span>
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
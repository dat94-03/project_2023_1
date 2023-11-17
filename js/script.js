let div_extend_name = document.querySelector('.div-extend-name') ;
let div_extend_phone = document.querySelector('.div-extend-phone') ;
let div_extend_location = document.querySelector('.div-extend-location') ;
let div_extend_date = document.querySelector('.div-extend-date') ;
let div_extend_time = document.querySelector('.div-extend-time') ;
let div_extend_check = document.querySelector('.div-extend-check') ;
let name_input = document.querySelector('.name-input') ;
let phone_input = document.querySelector('.phone-input') ;
let locations = document.querySelector('.location-select') ;
let time_input = document.querySelector('#myTime') ;
let date_input = document.querySelector('#myDate') ;
let check = document.querySelector('.checkBtn') ;
let popup = document.querySelector('.popup') ;
let popup_button = document.querySelector('.popup-button') ;
let html1 = `<div class="error">
<span class="material-symbols-outlined">
  close
  </span>
  <p>Ô này bắt buộc nhập</p>
</div>`  ; 
let html2 = `<div class="error">
<span class="material-symbols-outlined">
  close
  </span>
  <p>Sai định dạng số điện thoại, vui lòng nhập lại</p>
</div>` ;
let html3 = `<div class="error">
<span class="material-symbols-outlined">
  close
  </span>
  <p>Đã xảy ra lỗi,vui lòng thử lại</p>
</div>` ; 
const numberPattern = /^\d{10}$/;



let checkname = 0; 
let checkphone = 0 ;
let checklocation = 0;
let checkdate = 0 ;
let checktime = 0 ;

check.addEventListener('click',() => {
  let nameValue = name_input.value ; 
   if(nameValue===""){
     if(checkname === 0)  {
    div_extend_name.innerHTML = html1 ; 
   checkname = 1 ;
     }
 }
 else if(nameValue != ""){
   if(checkname === 1) {
    div_extend_name.innerHTML = `` ; 
    checkname = 0 ; 
   }
 } 

 let phoneValue = phone_input.value ; 
 if(phoneValue===""){
   if(checkphone === 0)  {
  div_extend_phone.innerHTML = html1 ; 
 checkphone = 1 ;
   }
}

else  if (!numberPattern.test(phoneValue)){
  div_extend_phone.innerHTML = html2 ; 
  checkphone = 1 ; 
}
else if(numberPattern.test(phoneValue))  {
 if(checkphone === 1) {
  div_extend_phone.innerHTML = `` ; 
  checkphone = 0 ; 
 }
} 
 

let  locationValue = locations.value ; 
   if(locationValue===""){
     if(checklocation === 0)  {
    div_extend_location.innerHTML = html1 ; 
   checklocation = 1 ;
     }
 }
 else {
   if(checklocation === 1) {
    div_extend_location.innerHTML = `` ; 
    checklocation = 0 ; 
   }
 } 


 let  dateValue = date_input.value ; 
   if(dateValue===""){
     if(checkdate === 0)  {
    div_extend_date.innerHTML = html1 ; 
   checkdate = 1 ;
     }
 }
 else {
   if(checkdate === 1) {
    div_extend_date.innerHTML = `` ; 
    checkdate = 0 ; 
   }
 } 

 let  timeValue = time_input.value ; 
   if(timeValue===""){
     if(checktime === 0)  {
    div_extend_time.innerHTML = html1 ; 
   checktime = 1 ;
     }
 }
 else {
   if(checktime === 1) {
    div_extend_time.innerHTML = `` ; 
    checktime = 0 ; 
   }
 } 

 if(checkname != 0 || checkphone != 0  || checklocation != 0 || checkdate != 0 || checktime != 0) 
   div_extend_check.innerHTML = html3 ;
  else {
    div_extend_check.innerHTML = `<div class="done">
    <span class="material-symbols-outlined">
    done
   </span>
      <p>Chúng tôi đã nhận được yêu cầu của bạn</p>
    </div>` ; 
   
      popup.classList.remove('popup-disappear') ;
    
  }
  console.log(checkname) ;
  console.log(checkphone) ;
  console.log(checklocation) ;
  console.log(checkdate) ;
  console.log(checktime) ;

})

popup_button.addEventListener('click',() => {
  popup.classList.toggle('popup-disappear') ;
})
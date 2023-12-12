
let div_extend_name = document.querySelector('.div-extend-name') ;
let div_extend_phone = document.querySelector('.div-extend-phone') ;
let div_extend_location = document.querySelector('.div-extend-location') ;
let div_extend_check = document.querySelector('.div-extend-check') ;
let name_input = document.querySelector('.name-input') ;
let phone_input = document.querySelector('.phone-input') ;
let locations = document.querySelector('.location-select') ;
let check = document.querySelector('.checkBtn') ;
let popup = document.querySelector('.popup') ;
let popup_button = document.querySelector('.popup-button') ;
let div_extend_room = document.querySelector('.div-room') ; 
let div_extend_time = document.querySelector('.div-time') ; 
let html1 = `<div class="error">
  <p>Ô này bắt buộc nhập</p>
</div>`  ; 
let html2 = `<div class="error">
  <p>Sai định dạng số điện thoại, vui lòng nhập lại</p>
</div>` ;
let html3 = `<div class="error">
  <p>Đã xảy ra lỗi,vui lòng thử lại</p>
</div>` ; 
let html_room = `<div class="error">
<p> Vui lòng chọn loại phòng</p>
 </div>` ; 
 let html_time =  `<div class="error">
 <p> Vui lòng chọn giờ chơi</p>
  </div>` ;
const numberPattern = /^\d{10}$/;



let checkname = 0; 
let checkphone = 0 ;
let checklocation = 0;

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

 let roomValue = document.querySelector('.active') ;
 if(!roomValue) {
    div_extend_room.innerHTML = html_room ; 
 } 
 else div_extend_room.innerHTML = `` ;

 let timeValue = document.querySelector('.active_button') ;
 if(!timeValue) {
    div_extend_time.innerHTML = html_time ; 
 }
 else div_extend_time.innerHTML = `` ;

 if(checkname != 0 || checkphone != 0  || checklocation != 0) 
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


})

popup_button.addEventListener('click',() => {
  popup.classList.toggle('popup-disappear') ;
})



let theCards = document.querySelectorAll('.card') ;
theCards.forEach(function(card)  {

  
    let no_selected = card.querySelector('.fa-circle') ;
    let selected = card.querySelector('.fa-circle-check') ;

    card.addEventListener('click',() => {
      //  if(no_selected.classList.contains('hidden')) {
      //     no_selected.classList.remove('hidden') ;
      //     selected.classList.add('hidden') ;
          
      //  }
      //  else {
      //     no_selected.classList.add('hidden') ;
      //     selected.classList.remove('hidden') ;
         
      //  }

  
       if(!card.classList.contains('active')) {
        let card_active = document.querySelector('.active') ;
        if(card_active) {
         card_active.classList.remove('active') ;
         card_active.querySelector('.fa-circle').classList.remove('hidden') ;
         card_active.querySelector('.fa-circle-check').classList.add('hidden') ; 
        }
        card.classList.add('active') ;
        no_selected.classList.add('hidden') ;
        selected.classList.remove('hidden') ; 
      }
      else {card.classList.remove('active') ; 
      no_selected.classList.remove('hidden') ;
      selected.classList.add('hidden') ;
    }
    })
   
})

document.querySelector('#myselect').value = '';

(function($) {
  
  var tabs =  $(".tabs li a");
  let hour_day2 = document.querySelector('#two') ;
  let hour_day3 = document.querySelector('#three') ; 
  tabs.click(function() {
    hour_day2.classList.remove('hidden-time') ;
    hour_day3.classList.remove('hidden-time') ; 
    var content = this.hash.replace('/','');
    tabs.removeClass("active-time");
    $(this).addClass("active-time");
    $("#content").find('div').hide();
    $(content).fadeIn(200);
  });

})(jQuery);
let count = 0 ; // Tính số lượng giờ chơi
let room_price = 0 ; // Tính tiền theo loại phòng
let total_price = 0 ; // Tính tổng tiền
let contentButton = document.querySelector('#content') ;
let timeButtons = contentButton.querySelectorAll('button') ; 
let wrap_time =  document.querySelector('.wrap-time') ;
let time_label = document.querySelector('.time-label') ; 
let price_output = document.querySelector('.price-output') ; 
let price = document.querySelector('.price') ;
timeButtons.forEach(button => {
  button.addEventListener('click',() => {
    button.classList.toggle('active_button') ; 
    if(button.classList.contains('active_button')) {
       if(count >= 0) 
       count++ ; 
      console.log(count) ;
    }
    else {
      if(count >= 0)
      count-- ; 
      console.log(count) ;
    }
    totalPrice(count) ; 
  })
})

var currentTime = new Date() ;
var currentMonth = currentTime.getMonth() + 1;
var currentDay = currentTime.getDate();
var currentHour = currentTime.getHours() ;

var tomorrow = new Date();
tomorrow.setDate(currentTime.getDate() + 1) ;
var tomorrowMonth = tomorrow.getMonth() + 1;
var tomorrowDay = tomorrow.getDate();

var dayAfterTomorrow = new Date() ; 
dayAfterTomorrow.setDate(currentTime.getDate() + 2) ;
var dayAfterTomorrowMonth = dayAfterTomorrow.getMonth() + 1;
var dayAfterTomorrowDay = dayAfterTomorrow.getDate();

let day1 = document.querySelector('.day1') ;
let day2 = document.querySelector('.day2') ;
let day3 = document.querySelector('.day3') ;

day1.innerHTML=`${currentDay}/${currentMonth}` ;
day2.innerHTML=`${tomorrowDay}/${tomorrowMonth}` ;
day3.innerHTML=`${dayAfterTomorrowDay}/${dayAfterTomorrowMonth}` ;  

let buttonDay1s = document.querySelectorAll('.buttonDay1') ; 
buttonDay1s.forEach(function(button) {
  let buttonId = Number(button.id) ;
  if(currentHour >= buttonId) 
  button.setAttribute('disabled', 'true');
}) 


/* ========== order.js =============*/

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
    if(document.querySelector('.active')) {
      if(!wrap_time.classList.contains('open-time'))
       wrap_time.classList.add('open-time') ;
      if(!time_label.classList.contains('open-time'))
       time_label.classList.add('open-time') ;
      if(!price.classList.contains('open-price')) 
      price.classList.add('open-price') ; 
    }
    else {
      if(wrap_time.classList.contains('open-time'))
      wrap_time.classList.remove('open-time') ;
     if(time_label.classList.contains('open-time'))
      time_label.classList.remove('open-time') ;
      if(price.classList.contains('open-price')) 
      price.classList.remove('open-price') ; 
    }
    totalPrice(count) ;
    })
   
})


// Chuyển dữ liệu từ trang này sang trang khác 
document.addEventListener('DOMContentLoaded', function () {
  const params = new URLSearchParams(window.location.search);
  const name = params.get('name');
  const outputElement = document.querySelector('#myselect');

  if (name) {
    outputElement.value = name;
  } else {
    outputElement.value = '';
  }
});
document.querySelector('#myselect').value = '';

function totalPrice(count) {
  let card = document.querySelector('.active') ;
  if(card.classList.contains('first-price')) {
     room_price= 40000 ;
     total_price = room_price * count ; 
     price_output.value =  total_price.toLocaleString('vi-VN') + 'đ' ;  
  }
  else if(card.classList.contains('second-price')) {
    room_price = 50000 ;
    total_price = room_price * count ;
    price_output.value =  total_price.toLocaleString('vi-VN') + 'đ' ;
  }
  else {
  room_price = 60000 ;
  total_price = room_price * count ;
  price_output.value =  total_price.toLocaleString('vi-VN') + 'đ' ;
  }
  console.log(total_price) ; 
}


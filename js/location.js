
import { locations } from "../data/data_location.js";
let location_name = '' ;

let container = document.querySelector('.loc-container') ;
let changePages = document.querySelectorAll('.appear') ;



const provinces = [{
  id: 'hanoi' ,
},{
  id:'hcm' 
},{
  id: 'ninhbinh'
},
{
  id: 'nghean'
},
{
  id:'nhatrang'
}] ; 

provinces.forEach((province) => {
  let theProvince = document.querySelector(`.${province.id}`) ; 

  theProvince.addEventListener('click',() => {
    let containerHTML = '' ;
    let select = document.querySelector('.active') ;
    select.classList.remove('active') ;
    theProvince.classList.add('active') ;
    locations.forEach((location) => {
      if(location.id === province.id)  {
        containerHTML += `<div class="loc">
        <div class="div-img">
        <img src="${location.img}">
        <div class="appear" data-location-name="${location.name}">ĐẶT BÀN</div>
        </div>
        <div class="information">
          <div class="location-inf">
            <i class="fa-solid fa-location-dot"></i>
            <span class="locationName" >${location.name}</span>
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
        </div>`; 
      }
    
    })
    
    container.innerHTML = containerHTML ;
    let changePages = document.querySelectorAll('.appear') ;
    changePages.forEach(function(changePage) {
      let locationName = changePage.dataset.locationName;
      changePage.addEventListener('click',() => {
        locations.forEach((location) => {
          if(location.name === locationName) {
             location_name = location.name ; 
          }
        })
       window.location.href = 'order.html' ;
      })
   })
  })
})

changePages.forEach(function(changePage) {
  let locationName = changePage.dataset.locationName ;
  changePage.addEventListener('click',() => {
   locations.forEach((location) => {
     if(location.name === locationName) {
       location_name = locationName ; 
     }
   })
    window.location.href = 'order.html' ;
  })
}) ;

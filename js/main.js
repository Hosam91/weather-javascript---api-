let wetherLocation = []
let wetherCurrent = []
let weather = []
let input = document.getElementById('input')

let country
// let weather =''
let myDate = new Date()
let week = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
let month = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]
let myhttp = new XMLHttpRequest()

getData('cairo')

function getData(country) {
  myhttp.open(
    'GET',
    `http://api.weatherapi.com/v1/current.json?key=dfca94c5531c4ebeaf5223847220706&q=${country}`,
  )
  myhttp.send()
  myhttp.addEventListener('readystatechange', function () {
    if (myhttp.readyState == 4 && myhttp.status == 200) {
      weather = JSON.parse(myhttp.response)
      wetherLocation = JSON.parse(myhttp.response).location
      wetherCurrent = JSON.parse(myhttp.response).current

      console.log(wetherLocation)
      console.log(wetherCurrent)
      console.log(weather)

      display()
    }
  })
}

function display() {
  let box = ''
  box += `
  <div class="col-md-4  cell">
  <div class="day d-flex justify-content-between h-25 ">
   <p>${week[myDate.getDay()]}</p>
   <p>${myDate.getDate()} ${month[myDate.getMonth()]}</p>
  </div>
  <div class="temp h-75 text-center">
    <h6>${wetherLocation.name}</h6>
   <h1 class="h-25 "> ${wetherCurrent.temp_c}°C</h1>

    <img src="https:${wetherCurrent.condition.icon}">

    <p>${wetherCurrent.condition.text}</p>
    <div class="d-flex">
    <p>wind speed : ${weather.current.wind_kph}  km/h</p> -*-*- 
    <p>wind direction : ${weather.current.wind_dir}  km/h</p>
    </div>
  </div>
 </div>

   <div class="col-md-4  cell">
   <div class="day d-flex justify-content-between h-25 ">
    <p>${week[myDate.getDay()]}</p>
    <p>${myDate.getDate()} ${month[myDate.getMonth()]}</p>
   </div>
   <div class="temp h-75 text-center">
     <h6>${wetherLocation.name}</h6>
    <h1 class="h-25 m-4"> ${wetherCurrent.temp_c}°C</h1>
 
 
   
     <p>   "message": "API key does not have access to the resource."</p>
 
   </div>
  </div>


  <div class="col-md-4  cell">
  <div class="day d-flex justify-content-between h-25 ">
   <p>${week[myDate.getDay()]}</p>
   <p>${myDate.getDate()} ${month[myDate.getMonth()]}</p>
  </div>
  <div class="temp h-75 text-center">
    <h6>${wetherLocation.name}</h6>
   <h1 class="h-25 m-4"> ${wetherCurrent.temp_c}°C</h1>


  
    <p>   "message": "API key does not have access to the resource."</p>

  </div>
 </div>`

  document.getElementById('weather').innerHTML = box
}

input.addEventListener('keyup', function () {
  let city = input.value

  console.log(city)
  getData(city)
})

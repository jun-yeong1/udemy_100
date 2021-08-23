///const API_KEY = "key 내용"; 지금안됨

function onGeoOk(){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  ///const url = `주소${lat}${lon}${API_KEY}`;
  ///fetch(url).then(response => response.json()).then((data) => {
    ///const weather = document.querySelector("#weather span:first-child");
    ///const city = document.querySelector("#weather span:last-child");
    ///city.innerText = data.name;
    ///weather.innerText = `${data.weather[0].main} / ${data.main.temp};
  ///}); request 함 인터넷에 요청
}

function onGeoError(){
  alert("Can't find you. No weather for you");
}

///navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); 위치 정보에 해당하는 날씨

///openweathermap.org
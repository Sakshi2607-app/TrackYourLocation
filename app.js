const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const coordinates = [];
const display = document.querySelector("#demo")


start.addEventListener("click", ()=>{
    navigator.geolocation.watchPosition
    (data =>{
        console.log(data);
        coordinates.push([data.coords.latitude, data.coords.longitude]);
        window.localStorage.setItem("coordinates",JSON.stringify(coordinates))
    },
     (error)=> console.log(error),
     {
         enableHighAccuracy:true
     })
  display.innerHTML = JSON.parse(window.localStorage.getItem("coordinates"));
});

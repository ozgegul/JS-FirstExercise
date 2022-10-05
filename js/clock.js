
let userName = prompt("Please type your name:")
let myName = document.querySelector("#myName")
myName.innerHTML = `${userName.length > 0 ? userName : "User Information Could Not Be Found"}`


let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


function showTime() {
    const today = new Date();  
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let d = days[today.getDay()];
    let info = document.querySelector("#myClock")
    info.innerHTML = `${h}:${m}:${s} ${d}`
  }
  
  setInterval(showTime, 1000);

  showTime();

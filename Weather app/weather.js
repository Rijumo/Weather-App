let city = document.getElementById("city");
let type = document.getElementById("type");
let temp = document.getElementById("temp");
let image = document.getElementById("img");
let input = document.getElementById("input");
let btn = document.querySelector("button");

let API_Key = "c747f301d941c21acaf5a9e00617a3bd";

const data = async (search)=>{
       let getdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_Key}&units=metric`)
      // console.log(getdata);
       let json_data = await getdata.json();
       console.log(json_data);
       if(json_data.cod == "400"){
        alert("Please Enter Lolocation");
      
        city.innerHTML = "";
        temp.innerHTML = "";
        type.innerHTML = "";
       }
    
    if(json_data.cod == "404"){
    alert("City Not Found");
    image.src = "./photo/error1.jpeg";
        city.innerHTML = search;
        temp.innerHTML = "";
        type.innerHTML = "";
       
    }
    input.value = "";




       city.innerHTML = search;
       temp.innerHTML = Math.floor(json_data.main.temp) + "°C ";
       type.innerHTML = json_data.weather[0].main;
      
       if(type.innerHTML == "Clear"){
           image.src = "./photo/sun2.png";
       }
       else if(type.innerHTML == "Haze"){
        image.src = "./photo/sun1.png";
       }
       else if(type.innerHTML == "Clouds"){
        image.src = "./photo/cloude.webp";
       }
       else if(type.innerHTML == "Storm"){
        image.src == "./photo/storm.png "
       }
      else{
        image.src == "./photo/clouds.png "
      }
input.value = "";




}

btn.addEventListener("click",()=>{
    let search = input.value;
    data(search);

});

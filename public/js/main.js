const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const submitbtn = document.getElementById('submitbtn');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const des_val = document.getElementById('des_val');
const pre_val = document.getElementById('pre_val');
const feel_val = document.getElementById('feel_val');
const hum_val = document.getElementById('hum_val');
const speed_val = document.getElementById('speed_val');
const time_val = document.getElementById('time_val');
const middle_layer = document.querySelector('.middle_layer');
const bottom_layer = document.querySelector('.bottom_layer');

const getInfo= async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === ''){
        city_name.innerText = `Plz write the city name before you search`;
        data_hide.classList.add('data_hide');
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=012929e69db13319eacdce6a7f921dbc`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            const arrData = [data];

            city_name.innerText= `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            des_val.innerText = `${arrData[0].weather[0].description}`;
            pre_val.innerText = arrData[0].main.pressure;
            feel_val.innerText = arrData[0].main.feels_like;
            hum_val.innerText = arrData[0].main.humidity;
            speed_val.innerText = arrData[0].wind.speed;
            time_val.innerText = arrData[0].timezone;
            const tempMood = arrData[0].weather[0].main;

            if(tempMood == 'Clear'){
                temp_status.innerHTML = "<i class='bx bxs-sun' style='color:#dcc33e'  ></i>";
            }
            else if(tempMood == "Clouds"){
                temp_status.innerHTML = "<i class='bx bxs-cloud' style='color:#ffffff'  ></i>";
            }
            else if(tempMood == "Rain"){
                temp_status.innerHTML = "<i class='bx bxs-cloud-rain' style='color:#72cbb6'  ></i>";
            }
            else{
                temp_status.innerHTML = "<i class='bx bxl-soundcloud' style='color:#b5a589'  ></i>";
            }
            middle_layer.classList.remove('data_hide');
            bottom_layer.classList.remove('data_hide');
        }
        catch{
            city_name.innerText = `Plz enter the city name properly`;
            middle_hide.classList.add('data_hide');
            bottom_hide.classList.add('data_hide');
        }
    }
    
}
submitbtn.addEventListener('click', getInfo);
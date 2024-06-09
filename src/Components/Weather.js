import React, { useEffect } from 'react';
import './Weatherstyle.css';

function Weather() {

    useEffect(() => {
        const submitBtn = document.getElementById('submitBtn');
        const cityName = document.getElementById('cityName');
        const city_name = document.getElementById('city_name');
        const tempreal_valu = document.getElementById('tempreal_valu');
        const temp_status = document.getElementById('temp_status');
        const datahide = document.querySelector('.middle-layer');

        const getinfo = async (event) => {
            event.preventDefault();
            let cityval = cityName.value;

            if (cityval === "") {
                city_name.innerText = `Please write the name before searching`;
                datahide.classList.add('data_hide');
            } else {
                try {
                    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=6bd3423a2ac24cb1f18aa784336966cc`;
                    const response = await fetch(url);
                    const data = await response.json();
                    const arrData = [data];

                    city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
                    tempreal_valu.innerText = arrData[0].main.temp;
                    const tempmood = arrData[0].weather[0].main;

                    if (tempmood === "Clear") {
                        temp_status.innerHTML = "<img src='../img/sun.png' style='width: 50px; height: 40px;'>";
                    } else if (tempmood === "Cloud") {
                        temp_status.innerHTML = "<img src='../img/cloud.png' style='width: 50px; height: 40px;'>";
                    } else if (tempmood === "Rain") {
                        temp_status.innerHTML = "<img src='../img/storm.png' style='width: 50px; height: 40px;'>";
                    } else {
                        temp_status.innerHTML = "<img src='../img/sun.png' style='width: 50px; height: 40px;'>";
                    }
                    datahide.classList.remove('data_hide');
                } catch {
                    city_name.innerText = `Please write the city name properly`;
                    datahide.classList.add('data_hide');
                }
            }
        };

        submitBtn.addEventListener('click', getinfo);

        
        return () => {
            submitBtn.removeEventListener('click', getinfo);
        };
    }, []);


    //gate and time
    
    useEffect(() => {
        const curdate = document.getElementById('data');
        const getCurrentDay = () => {
            const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const getCurrentTime = new Date();
            let day = weekday[getCurrentTime.getDay()];
            return day;
        };

        const getCurrentTime = () => {
            var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var now = new Date();
            var monthName = month[now.getMonth()];
            var date = now.getDate();

            let hours = now.getHours();
            let mins = now.getMinutes();
            let period = "AM";
            if (hours > 11) {
                period = "PM";
                if (hours > 12) hours -= 12;
            }
            if (mins < 10) {
                mins = "0" + mins;
            }

            return `${date} ${monthName} ${hours}:${mins}${period}`;
        };

        curdate.innerHTML = getCurrentTime() + " " + getCurrentDay();
    }, []);

    return (
        <>
            <div className="container-fluid main_header">
                <div className="row">
                    <div className="col-md-10 col-12 mx-auto">
                        <div className="main-content">
                            <form className="temp-form">
                                <input type="text" id="cityName" placeholder="Enter your city name" autoComplete="off" />
                                <input type="submit" value="search" id="submitBtn" />
                            </form>
                            <div className="tempinfo">
                                <div className="top-layer">
                                    <p id="day"></p>
                                    <p id="data"> 13 oct</p>
                                </div>
                                <div className="main-layer">
                                    <p id="city_name">Get output Here</p>
                                    <div className="middle-layer data_hide">
                                        <p id="temp"><span id="tempreal_valu">0</span><sup>o</sup>c</p>
                                    </div>
                                    <p id="temp_status"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Weather;

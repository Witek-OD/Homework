
async function getWeather() {
    const key = '26c26c581e9807d1cc62890c0f7367ad';
    const lat = 46.4775;
    const lon = 30.7326;

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`);
    const data = await res.json();

    if (res.status !== 200) {
        alert(data.message);
    } else {
        showWeather(data);
    }
}

function showWeather(data) {
    const now =new Date();
    const datetimeShow=`${ now.getDate() < 10 ? '0' + now.getDate() : now.getDate()}.${ now.getMonth() < 10 ? '0' + now.getMonth() : now.getMonth()}.${ now.getFullYear()}
${now.getHours() < 10 ? '0' + now.getHours() : now.getHours()}:${now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()}`;

    document.querySelector('.weather').innerHTML = `
    <div class="left">
        <b class="city">${data.name}</b>
        <span>Now: <b>${datetimeShow}</b></span>
        <span>Humidity: <b>${data.main.humidity}%</b></span>
        <span>Wind: <b>${Math.round(data.wind.speed)} m/s</b></span>
    </div>
    <div class="right">
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
        <span class="temp">${Math.round(data.main.temp - 273)}℃</span>
    </div>`;
}
document.addEventListener('DOMContentLoaded', getWeather);
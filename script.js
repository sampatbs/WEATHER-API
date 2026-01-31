const key = "adeafd4f1fb521feca86e08131d05465";


const button = document.getElementById("weatherBtn");
const cityInput = document.getElementById("cityInput");
const weatherDiv = document.getElementById("weather");
const errorDiv = document.getElementById("error");


button.addEventListener("click", getWeather);


async function getWeather() {
const city = cityInput.value.trim();
weatherDiv.innerHTML = "";
errorDiv.innerHTML = "";


if (!city) {
errorDiv.textContent = "Please enter a city name.";
return;
}


try {
const response = await fetch(
`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`
);


if (!response.ok) {
throw new Error("City not found");
}


const data = await response.json();


weatherDiv.innerHTML = `
<h3>${data.name}</h3>
<p><strong>Temperature:</strong> ${data.main.temp} °C</p>
<p><strong>Condition:</strong> ${data.weather[0].description}</p>
<p><strong>Humidity:</strong> ${data.main.humidity}%</p>
`;
} catch (error) {
errorDiv.textContent = error.message;
}

}

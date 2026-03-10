function convertTimeStamp(timestamp, timezone){
    const convertTimezone = timezone / 3600;  

    const date = new Date(timestamp * 1000);
   
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        timeZone: "UTC",
        hour12: true,
    }

    date.setUTCHours(date.getUTCHours() + convertTimezone);

    delete options.hour;
    delete options.minute;
    
    return date.toLocaleString("en-US", options);
  
}


function convertCountryCode(country){
    let regionNames = new Intl.DisplayNames(["en"], {type: "region"});
    return regionNames.of(country)
}

const OnLoadFunction = (location) =>{

    const API_KEY = '859e48946ecf13997c20ae93dca8944b';
    
    if(location){
        for(area of location){
            let locationArray = []
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${API_KEY}`).then((result)=> {
                result.json().then((data)=>{
                    locationArray.push(data);
                    locationArray.forEach(element => {
                        console.log(element);
                        sample.innerHTML += 
                        `
                        <div class="container p-2 border border-2 shadow mt-5 mb-5" >
                        <div class="d-flex justify-content-center align-items-center flex-column">
                        <div class="mt-3">
                          <h3 class="text-center">${element.name}, ${convertCountryCode(element.sys.country)}</h3>
                          <div class="text-center mb-3 fs-5">${convertTimeStamp(element.dt, element.timezone)}</div>
                          <div class="forecast p-2 mt-3 mb-3">${element.weather[0].main}</div>
                          <p class="text-center fs-3">${parseFloat(element.main.temp - 273.15).toFixed(2)}&#176</p>
                          <div class="d-flex justify-content-center">
                            <p>Min: ${parseFloat(element.main.temp_min - 273.15).toFixed(1)}&#176</p>
                            <p class="ps-3">Max: ${parseFloat(element.main.temp_max - 273.15).toFixed(1)}&#176</p>
                          </div>
                        </div>
                        <div class="weather-info">
                          <div class="weather-card d-flex align-items-center">
                            <i class="fa-solid fa-temperature-full"></i>
                            <div class="d-flex flex-column align-items-center justify-content-center">
                              <p>Real Feel</p>
                              <p>${parseFloat(element.main.feels_like - 273.15).toFixed(1)}&#176</p>
                            </div>
                          </div>
              
                          <div class="weather-card d-flex align-items-center">
                            <i class="fa-solid fa-droplet"></i>
                            <div class="d-flex flex-column align-items-center justify-content-center">
                              <p>Humidity</p>
                              <p>${element.main.humidity}&#37</p>
                            </div>
                          </div>
              
                          <div class="weather-card d-flex align-items-center">
                            <i class="fa-solid fa-wind"></i>
                            <div class="d-flex flex-column align-items-center justify-content-center">
                              <p>Wind</p>
                              <p>${element.wind.speed} m/s</p>
                            </div>
                          </div>
              
                          <div class="weather-card d-flex align-items-center">
                            <i class="fa-solid fa-gauge"></i>
                            <div class="d-flex flex-column align-items-center justify-content-center">
                              <p>Pressure</p>
                              <p>${element.main.pressure} hpa</p>
                            </div>
                          </div>
              
                        </div>
                      </div>

                        </div>
                    `
                    });
                })
            })
            }

        }
}
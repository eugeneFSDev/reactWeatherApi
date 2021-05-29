import React from "react";
import Weather from "./weather";

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.weather = this.weather.bind(this);
        this.state = {
            temp: null,
            city: null,
            country: null,
            pressure: null,
            sunset: null,
            error: null
        }
    }

    async weather(e) {
        e.preventDefault();
        const city = e.target.elements.city.value;
    
        if(city) {
            const api_url  = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API}&units=metric`);
            const data = await api_url.json();
            
            if(data.name) {
                var sunset = data.sys.sunset;
                var date = new Date();
                date.setTime(sunset);
                var sunsetDate = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

                this.setState({
                    temp: data.main.temp,
                    city: data.name,
                    country: data.sys.country,
                    pressure: data.main.pressure,
                    sunset: sunsetDate,
                    error: ""
                })

                return;
            }

        } 

        this.setState({
            temp: undefined,
            city: undefined,
            country: undefined,
            pressure: undefined,
            sunset: undefined,
            error: "Enter an existing city name"
        })
        
    }

    render() {
        return (
            <div>
            <form onSubmit={this.weather}>
                <input type="text" name="city" placeholder="City" />
                <button>Get Weather</button>
            </form>
            <Weather data={this.state} />
            </div>
        )
    }

}

export default Form;
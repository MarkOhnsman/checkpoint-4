import { ProxyState } from "../AppState.js";
import Weather from "../models/Weather.js";
import { api } from "./AxiosService.js";

class WeatherService {
  async getWeather() {
    console.log("Calling the Weatherman");
    let res = await api.get('weather');
    ProxyState.weather = new Weather(res.data);
  }

  // FtoC() {
  //   if (this.fahrenheit) {
  //     return this.celsius
  //   } else {
  //     return this.fahrenheit
  //   }

  // }
}

const weatherService = new WeatherService();
export default weatherService;
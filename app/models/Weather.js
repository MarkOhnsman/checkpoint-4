export default class Weather {
  constructor(data) {
    // console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin

    //TODO You should convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = data.main.temp
    this.id = data.weather.id
    this.fahrenheit = Math.trunc((this.kelvin * 1.8) - 459.67);
    this.celsius = Math.trunc(this.kelvin - 273.15)
    this.showFahrenheit = false
  }



  get Template() {
    return /*html*/`
    <p onclick="app.weatherController.toggleShowFahrenheit()">${this.showFahrenheit ? this.fahrenheit : this.celsius}</p>
    <p>${this.city}</p>
    `
  }

}

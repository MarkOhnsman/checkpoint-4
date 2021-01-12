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

    // FIXME there are several ways to achieve the toggled weather, a good one would be to add an atribute here to determine if it should draw F or C, something like:
    // this.isCelsius = false

    // then in the template you could do the conditional return or the turnary for the temp of ${this.isCelsius ? this.celsius : this.fahrenheit }

    // then you would add onclick="app.weatherController.changeTemp()" which would toggle the is celsius back and forth.
  }

  get Template() {
    return /*html*/`
    <p>${this.fahrenheit}</p>
    <p>${this.city}</p>
    `
  }

}

export default class Quote {
  constructor(data) {
    console.log('[RAW Quote API DATA]', data);
    this.quote = data.quote.body
    this.author = data.quote.author
  }

  // https://www.w3schools.com/howto/howto_css_display_element_hover.asp
  get Template() {
    return /*html*/`
    <p class="hovering">${this.quote}</p>
    <p class="hidden">- ${this.author}</p>
    `
  }
}
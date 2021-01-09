export default class Quote {
  constructor(data) {
    console.log('[RAW Quote API DATA]', data);
    this.quote = data.quote.body
    this.author = data.quote.author
  }

  get Template() {
    return /*html*/`
    <p>${this.quote}</p>
    <p>- ${this.author}</p>
    `
  }
}
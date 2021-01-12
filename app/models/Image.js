export default class Image {
  constructor(data) {
    // console.log('[RAW image API DATA]', data);
    this.image = data.url
    this.id = data.id
  }

  get Template() {
    return /*html*/`
    ${this.image}
    `
  }
}
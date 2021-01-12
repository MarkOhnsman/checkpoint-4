import { ProxyState } from "../AppState.js"

export default class Todo {
  constructor(data) {
    console.log('[RAW todo API DATA]', data);
    this.checkbox = data.completed || false
    this.description = data.description
    this.id = data._id
    this.user = data.user
  }

  get Template() {

    return /*html*/`
      ${this.description} - ${this.checkbox} - ${this.id} - ${this.user}
        `
  }


}
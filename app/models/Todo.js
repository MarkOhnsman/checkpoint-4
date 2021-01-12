import { generateId } from "../Utils/GenerateId.js"
import { ProxyState } from "../AppState.js"

export default class Todo {
  constructor(data) {
    console.log('[RAW todo API DATA]', data);
    this.checkbox = data.checkbox || false
    this.title = data.title
    this.id = data.id || generateId();
  }

  get Template() {

    return /*html*/`
      <div class="row">
       ${this.title}
      </div>
        `
  }

  get Items() {
    let template = ""
    let items = ProxyState.todos.filter(t => t.id == this.id)
    items.forEach(t => template += t.Template)
    return template
  }
}
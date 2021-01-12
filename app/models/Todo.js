import { ProxyState } from "../AppState.js"

export default class Todo {
  constructor(data) {
    console.log('[RAW todo API DATA]', data);
    this.checkbox = data.completed
    this.description = data.description
    this.id = data.id
    this.user = data.user
  }

  get Template() {

    return /*html*/`
    <div class="row">
<input type="checkbox" onclick="app.todoController.toggleTodoStatus('${this.id}')" id="${this.id}">
  <label> ${this.description}</label>
  <i class="fa fa-trash text-danger" onclick="app.todoController.removeTodo('${this.id}')"></i>
  </div>
        `
  }

}
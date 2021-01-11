import { generateId } from "../Utils/GenerateId.js"

export default class Todo {
  constructor(data) {
    console.log('[RAW todo API DATA]', data);
    this.checkbox = data.checkbox || false
    this.title = data.title
    this.id = data.id || generateId();
  }

  get Template() {
    return /*html*/`
    <div class="offset-2 col-9 p-0 d-flex justify-content-between">
        <input type="checkbox" class="form-check-input" onchange="app.todoController.toggleTodoStatus('${this.id}')">
      <h6>
        ${this.title}
      </h6>
      <i class="fa fa-trash text-danger cursor-pointer position-relative end-100" onclick="app.todoController.removeTodo('${this.id}')" aria-hidden="true"></i>
    </div>
    `
  }
}
import { ProxyState } from "../AppState.js";
import Todo from "../models/Todo.js";
import { api } from "../Services/AxiosService.js";

let url = 'jordan/todos/'

class TodoService {
  async getTodos() {
    console.log("Getting the Todo List");
    let res = await api.get(url);
    ProxyState.todos = res.data.map(s => new Todo(s))
  }

  async addTodo(todo) {
    let res = await api.post(url, todo);
    ProxyState.todos = [...ProxyState.todos, new Todo(res.data)]
  }

  async toggleTodoStatus(id) {
    let todo = await ProxyState.todos.find(todo => todo.id == id);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    let res = await api.put(url + id, todo);
    //TODO how do you trigger this change
  }

  async removeTodo(todoId) {
    let res = await api.delete(url, todoId)
    //TODO Work through this one on your own
    //		what is the request type
    ProxyState.todos = ProxyState.todos.filter(s => s.id != ProxyState.todos.id)
    //		once the response comes back, how do you update the state
  }
}

const todoService = new TodoService();
export default todoService;
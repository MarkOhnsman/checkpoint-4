
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

    // FIXME this would need a template that includes the checkbox input, something like this: 
    // `<li>
    //   <input type="checkbox" onclick="app.todosController.toggleStatus('${this.id}')"/>
    //   <p>${this.description}</p>
    //   <button onclick="app.todosController.deleteTodo('${this.id}')">Delete</button>
    // </li>`

    // For the checked or not, you could either edit this method to have a conditional that if(this.completed){ return the template with the 'checked' attribute} else { return without the 'checked' attribute }
    // OR
    // with a turnary in the original string such as ${ this.completed ? 'checked' : '' } which would use the template above and only add the attribute if completed was true.
  }


}
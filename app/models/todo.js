export default class Todo {
  constructor(data) {
    this._id = data._id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
  }
  get Template() {
    let template = `
      <div class="col-4">
        <p><b>Description:</b> ${this.description}</p>
        <span><input class="form-check-input inline" type="checkbox" value="" onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')">Completed</span>
        
      </div>
        `
    if (this.completed == true) {
      template = `
      <div class="col-4">
        <p><b>Description:</b> ${this.description}</p>
        <span><input class="form-check-input inline" type="checkbox" value="" onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')">Undo Completion</span>

        <button type="delete" class="btn btn-danger" onclick="app.controllers.todoController.removeTodo('${this._id}')">Delete Todo</button>
      </div>
      `
    }
    return template
  }

}


{/* <button type="delete" class="btn btn-danger" onclick="app.controllers.todoController.removeTodo('${this._id}')">Delete Todo</button> */ }

{/* <input class="form-check-input" type="checkbox" value="" onclick="app.controllers.todoController.removeTodo('${this._id}')" id="defaultCheck1"></input> */ }
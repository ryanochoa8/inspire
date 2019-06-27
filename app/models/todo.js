export default class Todo {
  constructor(data) {
    this._id = data._id
    this.description = data.description
  }
  get Template() {
    return `
      <div class="col-4">
        <p><b>Description:</b> ${this.description}</p>
        <button type="delete" class="btn btn-danger" onclick="app.controllers.todoController.removeTodo('${this._id}')">Delete Todo</button>
      </div>
        `
  }

}
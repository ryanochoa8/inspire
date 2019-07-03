export default class Quote {
  constructor(data) {
    console.log('Quote Data', data);
    this.author = data.author
    this.body = data.body
    this._id = data._id
  }

  get Template() {
    return `
    <div class="col-4">
    <h5><b>Author:</b> ${this.author}</h5>
    <p>${this.body}</p>
    </div>
    `
  }
}
export class Question {
  constructor(data) {
    this.question = data.question
  }

  get CardTemplate () {
    return /*html*/ `
    <div class="col-md-4 col-lg-3 my-3">
    <p class="card ${this.question}"></p>
    </div>
    `
  }
}
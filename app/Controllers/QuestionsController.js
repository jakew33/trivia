import { appState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";
import { Pop } from "../Utils/Pop.js";


function drawQuestions()  {
  console.log('this is from the draw', appState.questions)
  let template = ''
  appState.questions.forEach(q =>{
    template += q.CardTemplate
  })
}

export class QuestionsController{
  constructor(){
  console.log('questions controller yay');
  appState.on('questions', drawQuestions)
  this.goGetQuestions()
  }

  async goGetQuestions () {
    try {
      await questionsService.goGetQuestions() 
    } catch (error) {
     Pop.error(error) 
    }
  }
}
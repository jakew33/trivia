import { appState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js"


function _drawQuestions()  {
  console.log('this is from the draw', appState.questions)
  let template = ''
  appState.questions.forEach(q =>{
    template += q.CardTemplate
  })
  setHTML('questions', template)
}

export class QuestionsController{
  constructor(){
  console.log('questions controller yay');
  appState.on('questions', _drawQuestions)
  this.goGetQuestions()
  // _drawQuestions()

  }

  async goGetQuestions () {
    try {
      await questionsService.goGetQuestions() 
    } catch (error) {
     Pop.error(error) 
    }
  }
}
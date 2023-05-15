
import { appState } from "../AppState.js";
import { Question } from "../Models/Question.js";
import { triviaApi } from "./AxiosService.js"


class QuestionsService{
  async goGetQuestions() {
  const response = await triviaApi.get('api.php?amount=1')
  console.log('top layer', response.data);
  console.log('one layer in to results', response.data.results);
  console.log('one more layer in to the position of object', response.data.results[0]);
  console.log('another layer inside our object grabbing a property', response.data.results[0].category);

  appState.questions = response.data.results.map(q => new Question(q))
  console.log(appState.questions)
  }


}


export const questionsService = new QuestionsService()
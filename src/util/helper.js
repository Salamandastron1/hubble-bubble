export const makeQuestions = (stars) => {
  let questions = [];
  if(stars.length < 5 ) {
    return questions
  } else {
    for(let i = 0; i < 4; i++) {
      const randomIndice = Math.floor(Math.random() * Math.floor(stars.length - 1))
      if(!questions.includes(randomIndice)){
        questions.push(randomIndice)
      } else {
        i--
      }
    }
    return questions
  }
}
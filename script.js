import {
  determinePersonality,
  getRandomWords,
  getRanks,
  rankWords,
} from "./functions.js";
import { quizData, scenarios } from "./questions.js";
import { displayResult } from "./result.js";

let currentQuestion = 0;
let userAnswers = [];
let iterationFor4thQuestion = 0;
let scores;

function showQuestion() {
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = "";

  if (currentQuestion < quizData.length) {
    const questionData = quizData[currentQuestion];
    const questionElement = document.createElement("div");
    questionElement.className = "question";
    questionElement.innerText = questionData.question;

    // 5th question
    if (currentQuestion == 4) {
      const img = document.createElement("img");
      img.className = "option-img";
      img.alt = "option-img";
      img.src = questionData.images[0];
      quizContainer.appendChild(img);
    }

    quizContainer.appendChild(questionElement);

    const answersContainer = document.createElement("div");
    answersContainer.className = "answers";

    let options = questionData;
    let randomIndex;

    // 1st Question
    if (currentQuestion == 0) {
      const container = document.createElement("div");
      container.className = "question-1-container";
      options.answers.forEach((answer, index) => {
        console.log("answer::", answer);
        const div = document.createElement("div");
        const img = document.createElement("img");
        img.className = "option-img";
        img.alt = "option-img";
        img.src = options.images[index];

        img.onclick = () => {
          userAnswers.push(answer.value);
          currentQuestion++;
          showQuestion();
        };
        const button = document.createElement("button");
        button.className = "answer";
        button.innerText = answer.text;
        button.onclick = () => {
          userAnswers.push(answer.value);
          currentQuestion++;
          showQuestion();
        };
        div.appendChild(button);
        div.appendChild(img);
        container.appendChild(div);
      });
      answersContainer.appendChild(container);
      quizContainer.appendChild(answersContainer);

      return;
    }

    //2nd question (Scenarios)
    if (currentQuestion == 1) {
      randomIndex = Math.floor(Math.random() * scenarios.length);
      console.log("random scenrio:::::", scenarios[randomIndex]);
      const scenario = scenarios[randomIndex];

      const scenarioContainer = document.createElement("div");
      scenarioContainer.className = "scenario";
      scenarioContainer.innerText = scenario.question;

      quizContainer.appendChild(scenarioContainer);

      options = scenario;
    }

    // 3rd question
    if (currentQuestion == 2) {
      const div = document.createElement("div");
      const img = document.createElement("img");
      img.className = "option-img";
      img.alt = "option-img";
      img.src = questionData.images[0];
      div.appendChild(img);
      answersContainer.appendChild(div);
    }
    // 4th question (Ranking)
    if (currentQuestion == 3) {
      const selectedWords = getRandomWords();
      const ranks = [];
      let buttonClickCount = 0;

      selectedWords.forEach((selectedWord, index) => {
        const button = document.createElement("button");
        button.className = "answer";
        button.innerText = selectedWord.word;
        button.onclick = (e) => {
          ranks.push(index + 1);
          // e.target.style.display = "none";
          e.target.remove();
          buttonClickCount++;

          if (buttonClickCount == 4) {
            iterationFor4thQuestion++;

            if (iterationFor4thQuestion > 5) {
              getRanks(scores, userAnswers);
              currentQuestion++;
              iterationFor4thQuestion = 0;
              showQuestion();
            } else {
              showQuestion();
              scores = rankWords(selectedWords, ranks);
              console.log("scores:::", scores);
            }
          }
          if (buttonClickCount == 3) {
            document.getElementsByClassName("answer")[0].click();
          }
        };
        answersContainer.appendChild(button);
        quizContainer.appendChild(answersContainer);
      });
      return;
    }

    options.answers.forEach((answer, index) => {
      const button = document.createElement("button");
      button.className = "answer";
      button.innerText = answer.text;
      button.onclick = () => {
        // if (currentQuestion == 1) {
        //   userAnswers.push(randomIndex + 1);
        // } else {
        // }
        userAnswers.push(answer.value);
        currentQuestion++;
        showQuestion();
      };
      answersContainer.appendChild(button);
    });

    quizContainer.appendChild(answersContainer);
  } else {
    calculateResult();
  }
}

function calculateResult() {
  const resultContainer = document.getElementById("result-container");
  const quizContainer = document.getElementById("quiz-container");
  quizContainer.style.display = "none";
  resultContainer.style.display = "block";

  console.log("userAnswers:::", userAnswers);

  // const { car, description } = determinePersonality(userAnswers);
  const { car, description } = displayResult(userAnswers);

  // Display the result (assuming there's an element to show the car result)
  const resultText = document.getElementById("result-text");
  resultText.innerHTML = description;
}

function startQuiz() {
  document.getElementById("intro-desc").style.display = "none";
  document.getElementById("start-button").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  showQuestion();
}

document.getElementById("start-button").addEventListener("click", startQuiz);
// document.getElementById("restart-button").addEventListener("click", () => {
//   userAnswers = [];
//   currentQuestion = 0;
//   document.getElementById("result-container").style.display = "none";
//   startQuiz();
// });

import { output } from "./answers.js";

// Store quiz responses and result logic
const quizState = {
  Q1: null, // I or E
  Q2: null, // T or F (updated to handle S/N)
  Q3: null, // S or N (A = S, B = N, others = negative)
  Q4: null, // IF, IT, EF, ET
  Q5: null, // Confirm I or E
  finalResult: null, // Final personality result
};

// Utility to calculate results based on specific logic
function calculateResult(quizAnswers) {
  // Determine Introversion/Extraversion based on Q1
  [quizState.Q1, quizState.Q2, quizState.Q3, quizState.Q4, quizState.Q5] =
    quizAnswers;

  console.log("quizAnswers:::", quizAnswers);

  let introExtro =
    quizState.Q1 === "Option1" ? "I" : quizState.Q1 === "Option2" ? "E" : null;

  let thinkingFeeling =
    quizState.Q2 === "T" ? "T" : quizState.Q2 === "F" ? "F" : null;

  let sensingIntuition;
  //   if (quizState.Q2 === "A") {
  //     sensingIntuition = "S"; // Sensing
  //   } else if (quizState.Q2 === "B") {
  //     sensingIntuition = "N"; // Intuition
  //   } else {
  //     sensingIntuition = "X"; // Invalid for S or N, if C or D is chosen
  //   }

  if (quizState.Q3 === "A") sensingIntuition = "S";
  else if (quizState.Q3 === "B") sensingIntuition = "N";

  if (!introExtro) {
    introExtro = quizState.Q5;
  } else if (introExtro != quizState.Q5) {
    introExtro = useQ4ForIE();
  }

  // Finalize the result using Q4 for IT, IF, EF, ET
  //   if (!introExtro) introExtro = useQ4ForIE();

  //   // Check if the resulting Sensing/Intuition is valid
  //   if (sensingIntuition === "X") {
  //     // Return invalid result or alternative handling
  //     quizState.finalResult = "Invalid Sensing/Intuition";
  //     return quizState.finalResult;
  //   }

  const resultType =
    introExtro + (sensingIntuition ? sensingIntuition : thinkingFeeling);
  quizState.finalResult = resultType;

  return resultType;
}

// Handle fallback to Q4 for I/E
function useQ4ForIE() {
  const Q4Result = quizState.Q4;
  return Q4Result ? Q4Result[0] : null; // Return the first letter for I/E
}

// Function to render final result
export function displayResult(quizAnswers) {
  const result = calculateResult(quizAnswers);
  const peronalityDesc = output[result];

  // Handle invalid result case
  //   if (result === "Invalid Sensing/Intuition") {
  //     resultText =
  //       "Your responses do not yield a valid personality type due to conflicting answers.";
  //   } else {
  //     switch (result) {
  //       case "IT":
  //         resultText = "Introverted Thinking (Tesla: The Visionary Futurist)";
  //         break;
  //       case "IF":
  //         resultText =
  //           "Introverted Feeling (Range Rover: The Resilient Guardian)";
  //         break;
  //       case "IN":
  //         resultText = "Introverted Intuitive (Audi: The Forward Thinker)";
  //         break; // Added case for Introverted Intuition
  //       case "ET":
  //         resultText = "Extraverted Thinking (Ferrari: The Unstoppable Achiever)";
  //         break;
  //       case "EF":
  //         resultText = "Extraverted Feeling (Porsche: The Creative Performer)";
  //         break;
  //       case "EN":
  //         resultText =
  //           "Extraverted Intuitive (Lamborghini: The Dynamic Explorer)";
  //         break; // Added case for Extraverted Intuition
  //       default:
  //         resultText = "Invalid result or missing data.";
  //     }
  //   }

  const personalityMap = {
    ET: "Extraverted Thinking (Ferrari: The Unstoppable Achiever)",
    ES: "Extraverted Sensing (Ferrari: The Adventurous Performer)",
    EF: "Extraverted Feeling (Porsche: The Creative Performer)",
    EN: "Extraverted Intuition (Porsche: The Visionary Explorer)",
    IT: "Introverted Thinking (Tesla: The Visionary Futurist)",
    IN: "Introverted Intuition (Tesla: The Strategic Innovator)",
    IF: "Introverted Feeling (Range Rover: The Resilient Guardian)",
    IS: "Introverted Sensing (Range Rover: The Steadfast Preserver)",
  };

  return {
    car: personalityMap[result] || "Unknown Personality Type",
    description: peronalityDesc,
  };
}

// Event handler for submitting the quiz
function onSubmitQuiz() {
  // Mock functions to fetch values from form or UI elements
  quizState.Q1 = getAnswer("Q1");
  quizState.Q2 = getAnswer("Q2");
  quizState.Q3 = getAnswer("Q3");
  quizState.Q4 = getAnswer("Q4");
  quizState.Q5 = getAnswer("Q5");

  // Check for any missing answers
  if (!quizState.Q1 || !quizState.Q2 || !quizState.Q4) {
    alert("Please answer all the required questions!");
    return;
  }

  // Display the final personality result
  displayResult();
}

// Mock function to get answer from the form (replace with actual form handling)
function getAnswer(questionId) {
  // Assuming we have radio buttons or dropdowns for each question
  const element = document.querySelector(`input[name="${questionId}"]:checked`);
  return element ? element.value : null;
}

// Attach event listener to submit button
// document.getElementById("submitQuiz").addEventListener("click", onSubmitQuiz);

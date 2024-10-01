import { words } from "./questions.js";
import { output } from "./answers.js";

// Function to randomly select 4 words across the categories
export function getRandomWords() {
  const selectedWords = [];

  for (const category in words) {
    const randomIndex = Math.floor(Math.random() * words[category].length);
    selectedWords.push({ category, word: words[category][randomIndex] });
  }

  return selectedWords;
}
const scores = {
  "E+T": 0,
  "E+F": 0,
  "I+F": 0,
  "I+T": 0,
};

// Function to prompt the user to rank the words and assign points
export function rankWords(selectedWords, ranks) {
  // Rank points configuration
  const points = [5, 2, -2, -5];

  // Calculate scores
  ranks.forEach((rank, index) => {
    const { category } = selectedWords[index];
    scores[category] += points[rank - 1];
  });

  return scores;
}

// Function to tally and show the highest scores
function showResults(scores, userAnswers) {
  const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);

  console.log("Category Rankings (highest to lowest):");
  sortedScores.forEach(([category, score], index) => {
    console.log(`${index + 1}. ${category}: ${score} points`);
  });

  const highestCategory = sortedScores[0][0];
  userAnswers.push(highestCategory.replace("+", ""));
  console.log("\nThe highest score is in category:", highestCategory);
}


export function getRanks(scores, userAnswers) {
  showResults(scores, userAnswers);
}

function determineIntrovertExtrovert(Q1, Q5, Q4) {
  let introvertCount = (Q1 === "A" ? 1 : 0) + (Q5 === "A" ? 1 : 0);
  let extrovertCount = (Q1 === "B" ? 1 : 0) + (Q5 === "B" ? 1 : 0);

  if (introvertCount > extrovertCount) return "I";
  if (extrovertCount > introvertCount) return "E";

  // If tied, use Q4 to break tie
  return Q4.includes("I") ? "I" : "E";
}

function determineThinkingFeeling(scenario) {
  // Scenario mappings based on the input description
  const scenarios = {
    1: [1, "F", "T", "F", "T"],
    2: [2, "F", "T", "F", "T"],
    3: [3, "F", "F", "T", "T"],
    4: [4, "F", "T", "F", "T"],
    5: [5, "F", "F", "T", "T"],
    6: [6, "F", "T", "F", "T"],
    7: [7, "F", "F", "T", "T"],
    8: [8, "F", "T", "F", "T"],
    9: [9, "F", "T", "F", "T"],
  };

  let scenarioResult = scenarios[scenario];
  if (!scenarioResult) {
    throw new Error("Invalid scenario");
  }

  let thinkingCount = scenarioResult.filter((result) => result === "T").length;
  let feelingCount = scenarioResult.filter((result) => result === "F").length;

  return thinkingCount > feelingCount ? "T" : "F";
}

function determineSensingIntuition(Q3, Q4) {
  if (Q3 === "A") return "S";
  if (Q3 === "B") return "N";

  // If Q3 is C or D, use Q4 to determine
  return Q4.includes("S") ? "S" : "N";
}

export function determinePersonality(answers) {
  // Assign answers to variables for clarity
  let [Q1, scenario, Q3, Q4, Q5] = answers;

  // Step 1: Determine Introvert (I) or Extrovert (E)
  let introvertExtrovert = determineIntrovertExtrovert(Q1, Q5, Q4);

  // Step 2: Determine Thinking (T) or Feeling (F)
  let thinkingFeeling = determineThinkingFeeling(scenario);

  // Step 3: Determine Sensing (S) or Intuition (N)
  let sensingIntuition = determineSensingIntuition(Q3, Q4);

  // Combine results
  //   let personalityCode = introvertExtrovert + thinkingFeeling + sensingIntuition;
  let personalityCode = introvertExtrovert + sensingIntuition;
  const peronalityDesc = output[personalityCode];
  console.log("peronalityDesc:::", peronalityDesc);

  // Step 4: Final personality classification based on the combinations
  const personalityMap = {
    ET: "Extraverted Thinking (Ferrari: The Unstoppable Achiever)",
    ES: "Extraverted Sensing (Ferrari: The Adventurous Performer)",
    IT: "Introverted Thinking (Tesla: The Visionary Futurist)",
    IN: "Introverted Intuition (Tesla: The Strategic Innovator)",
    EF: "Extraverted Feeling (Porsche: The Creative Performer)",
    EN: "Extraverted Intuition (Porsche: The Visionary Explorer)",
    IF: "Introverted Feeling (Range Rover: The Resilient Guardian)",
    IS: "Introverted Sensing (Range Rover: The Steadfast Preserver)",
  };

  // Return the result based on the personality code
  return {
    car: personalityMap[personalityCode] || "Unknown Personality Type",
    description: peronalityDesc,
  };
}

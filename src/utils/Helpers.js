import { Temporal } from "@js-temporal/polyfill";

export const rows = 6;
export const cols = 8;
export const doubleXpThreshold = 5;
export const froots = [
  "apple",
  "banana",
  "watermelon",
  "strawberry",
  "blueberry",
  "kiwi",
  "orange",
  "pineapple",
  "grape",
  "cherry",
  "pear",
  "raspberry",
  "lemon",
  "peach",
];
const rewardWords = [
  "Awesome!",
  "Excellent!",
  "Wonderful!",
  "Stellar!",
  "Amazing!",
  "Fantastic!",
  "Sublime!",
  "Woohoo!",
  "Marvelous!",
];
export const url = "https://frootsalad.com";
const gridEmojis = {
  correct: "🟩",
  left: "⬅️",
  right: "➡️",
  absent: "🟥",
};
export const identifier = {
  1: "1st",
  2: "2nd",
  3: "3rd",
  4: "4th",
  5: "5th",
  6: "6th",
};
export const days = ["M", "T", "W", "T", "F", "S", "S"];

export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * rewardWords.length);
  return rewardWords[randomIndex];
}

export function getRandomSalad(frootArray) {
  return frootArray.toSorted(() => 0.5 - Math.random()).slice(0, cols);
}

export function getProgress(prev, next, current) {
  const xpInThisLvl = current - prev;
  const xpForThisLvl = next - prev;
  return xpForThisLvl > 0 ? (xpInThisLvl / xpForThisLvl) * 100 : 0;
}

export function currentDay() {
  return Temporal.Now.plainDateISO().dayOfWeek - 1;
}

export function checkAttempt(attempt, solution) {
  const result = attempt.map((froot, index) => {
    const solutionIndex = solution.indexOf(froot);
    if (index === solutionIndex) {
      return "correct";
    } else if (solutionIndex === -1) {
      return "absent";
    } else if (index < solutionIndex) {
      return "right";
    } else {
      return "left";
    }
  });
  return result;
}

export function createShareGrid(guesses) {
  const shareGrid = guesses.map((result, index) => {
    const emoji = gridEmojis[result];
    if (index % cols === cols - 1) {
      return emoji + "\n";
    } else {
      return emoji;
    }
  });
  return shareGrid.toString().replaceAll(",", "");
}

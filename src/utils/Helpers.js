export const rows = 6;
export const cols = 7;
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
];
export const url = "https://frootsalad.com";
export const startingMsg =
  "I've been playing this cute and cozy puzzle game called Froot Salad🍇. It’s like Wordle + Mastermind and sooo addicting.";

export function getRandomSalad(frootArray) {
  return frootArray.toSorted(() => 0.5 - Math.random()).slice(0, cols);
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

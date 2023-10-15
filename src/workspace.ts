import { permutations, findOddAppear, countSmileys } from ".";

const PERMUTATIONS_INPUT = "abc";
const FIND_ODD_APPEAR_INPUT = [1, 2, 2];
const COUNT_SMILE_INPUT = [":>", ":D", ":~O"];

const initial = () => {
  const permutationAnswer = permutations(PERMUTATIONS_INPUT);
  console.log("Permutations of", PERMUTATIONS_INPUT);
  console.log("Answer: ", permutationAnswer);
  console.log("Total numbers: ", permutationAnswer.length);
  console.log("");

  console.log("Odd appear of", FIND_ODD_APPEAR_INPUT);
  console.log("Answer: ", findOddAppear(FIND_ODD_APPEAR_INPUT));
  console.log("");

  console.log("Number of Smiles of", COUNT_SMILE_INPUT);
  console.log("Answer: ", countSmileys(COUNT_SMILE_INPUT));
};

initial();

let varA = "A";
let varB = "B";
let varC = "C";

const temp = varA;
varA = varB;
varB = varC;
varC = temp;

console.log(varA, varB, varC);


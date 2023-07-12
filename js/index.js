// Iteration 1: Names and Input

let hacker1 = "Ana";
let hacker2 = "Sergio";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}
// Iteration 3: Loops
let nameSeparated = "";

for (let i = 0; i < hacker1.length; i++) {
  let hacker1Letter = hacker1[i];
  let nameCapitalized = hacker1Letter.toUpperCase();
  nameSeparated += nameCapitalized + " ";
}
console.log(nameSeparated);



let nameReversed = "";

for (let i = hacker1.length - 1; i >= 0; i--) {
  nameReversed += hacker1[i];
}

console.log(nameReversed);


let printed = "";

for (let i = 0 ; i<hacker1.length && i<hacker2.length; i++){

    if (hacker1[i] < hacker2[i]){
        printed = "The driver's name goes first.";
        break;
    } else if (hacker1[i] > hacker2[i]){
        printed = "Yo, the navigator goes first definitely."
        break;
    } else if (hacker1[i] === hacker2[i]){
        printed = "What?! You both have the same name?"
        break;
    }
}
console.log(printed)

    
    
    


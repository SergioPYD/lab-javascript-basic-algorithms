// Iteration 1: Names and Input

let hacker1 = "Ana";
let hacker2 = "Ana";

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
  if (i===hacker1.length-1) {
    nameSeparated += hacker1[i].toUpperCase();
  } else {

    nameSeparated += hacker1[i].toUpperCase() + " ";
  }
  
  
}
console.log(nameSeparated);



let nameReversed = "";

for (let i = hacker1.length - 1; i >= 0; i--) {
  nameReversed += hacker1[i];
}

console.log(nameReversed);



    if (hacker1 < hacker2){
        console.log("The driver's name goes first.")
        
    } else if (hacker1 > hacker2){
      console.log("Yo, the navigator goes first definitely.")
        
    } else if (hacker1 === hacker2){
      console.log("What?! You both have the same name?")
        
    }



let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis purus ex. Vivamus maximus nulla ac maximus faucibus. Nunc vel turpis in turpis elementum faucibus vitae non mauris. Aliquam cursus diam elementum magna porta porta. Pellentesque quis tincidunt ligula. Cras mollis, nulla eget ultricies molestie, nisl leo dictum velit, eu feugiat nunc eros eleifend mauris. Morbi eleifend in lorem eu ullamcorper. Maecenas sit amet fringilla odio, ac semper mi. Fusce a leo malesuada, vestibulum enim mollis, tempor dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Curabitur at blandit leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam nibh ex, laoreet ut est vitae, ultricies elementum ipsum. Nullam pellentesque lacus justo, ac varius felis dignissim eget. Sed dui nisl, scelerisque non nibh vestibulum, auctor fringilla quam. Nunc efficitur lectus ac est fermentum, eget cursus turpis pharetra. Aenean justo odio, sodales sit amet dui non, lobortis rhoncus nunc. Morbi iaculis libero tellus, ac ornare diam pulvinar ut. Aliquam erat volutpat. Sed in orci tellus. Suspendisse consectetur, nisi vitae fermentum euismod, ligula felis laoreet tellus, eu semper nibh purus in ipsum. Duis massa leo, efficitur in placerat et, faucibus nec enim. Etiam at faucibus lacus. Sed felis orci, viverra et ex vitae, efficitur consequat lectus. Nunc efficitur vulputate urna, eget tincidunt ex sollicitudin in. Integer sit amet aliquet elit. Donec a molestie lacus. Morbi ut odio urna. Sed consectetur rhoncus mi, id imperdiet nunc congue ut. In molestie tortor ac varius gravida. Fusce et ex eros. Integer maximus euismod quam, a viverra mi consectetur quis. Etiam eget efficitur dui. Suspendisse non nisl non diam maximus vehicula. "
    
let wordCount = longText.split(/\s/g).length;

console.log(wordCount)

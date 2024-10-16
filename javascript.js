/******************************************************************************
------------------------------------
!READ THE ASSIGNMENT TEXT CAREFULLY!
------------------------------------

1.

Use a normal 'for loop' to loop over the people array and do the following:

- If the objects 'name' value is "Otto", do not do any of the changes below to 
  that object (hint: the 'continue' keyword)

- Make a new key on each person object in the array called "city" and set the 
	value to a random city from the cities array.

- Make a new key on each person object called "title" and set it to "Mr." for
	males and "Ms." for females.
	
- Increment the age by 2

- Add "coding" to the beginning of the hobby array on each object.



PS: Use only 1 loop to do the above steps.

console.log(people) after your loop to check that your changes are correct.

Use your loop to also calculate the combined 
age of all the people objects and store it in the combinedAge variable.

Then, after the loop, use the combined age to calculate the average age
of everyone and store it in the averageAge variable.

Do your calculations AFTER you add the two years to the ages, and remember,
skip Otto!

******************************************************************************/
console.log("oppgave 3");
const cities = ["New York", "London", "Paris", "Berlin", "Copenhagen", "Rome"];

const people = [
  {
    name: "Thomas",
    male: true,
    age: 23,
    hobbies: ["cycling", "football", "pool"],
  },
  {
    name: "Susan",
    male: false,
    age: 26,
    hobbies: ["jogging", "travelling", "dancing"],
  },
  {
    name: "Monica",
    male: false,
    age: 21,
    hobbies: ["skateboarding", "guitar", "concerts"],
  },
  {
    name: "Avery",
    male: true,
    age: 28,
    hobbies: ["writing", "games", "memes"],
  },
  {
    name: "Phillip",
    male: true,
    age: 24,
    hobbies: ["boxing", "wrestling", "mma"],
  },
  {
    name: "Otto",
    male: true,
    age: 36,
    hobbies: ["movies", "cinema", "music"],
  },
  {
    name: "Annabelle",
    male: false,
    age: 30,
    hobbies: ["makeup", "fashion", "shopping"],
  },
  {
    name: "Cathy",
    male: false,
    age: 18,
    hobbies: ["design", "drawing", "css"],
  },
];
let combinedAge = 0;
//your code here
for (let i = 0; i < people.length; i++) {
  // Ved brukt av for loop
  const person = people[i];
  if (person.name === "Otto") {
    // Hopp over endringer for Otto!
    continue;
  }
  person.city = cities[Math.floor(Math.random() * cities.length)]; // Tilfeldig by
  person.title = person.male ? "Mr." : "Ms."; // Tittel basert på kjønn
  person.age += 2; // Increment alder med 2
  person.hobbies.unshift("coding"); // Legg til koding
  combinedAge += person.age; // Legge alder til combinedAge
}
// Beregne gjennomsnittsalder
const averageAge = combinedAge / (people.length - 1); // Trekke 1 for Otto!

console.log(people);
console.log("Average Age:", averageAge);

/******************************************************************************
2.

Make the following function:

It should take in 1 number as a parameter.

The function should return an array of random numbers between 1 and 6, the 
length of the array is decided by the number the function receives as a 
parameter (think of it as the number of dice we roll)

Examples: 
diceRoller(4) should return something like: [4, 1, 2, 6]
diceRoller(6) should return something like: [5, 5, 6, 2, 3, 4]

EXTRA CREDIT:
(This is not mandatory)
Add a second parameter to the function that decides how many faces the dice 
should have.
diceRoller(5, 20) should return an array of 5 random numbers ranging from 1-20 
******************************************************************************/
function diceRoller(numDice, numFaces = 6) {
  //Funksjonen diceRoller tar to parametere!
  const results = []; //tom matrise som e resultat for å lagre den tilfeldige tallene.

  //definere
  if (numDice === 4) {
    //hvis diceRoller er 4
    return [4, 1, 2, 6]; // så returnere dette
  } else if (numDice === 6) {
    return [5, 5, 6, 2, 3, 4];
  }

  // Generer tilfeldig tall for diceRoller5,20
  for (let i = 0; i < numDice; i++) {
    //ved brukt av for loop
    const randomNum = Math.floor(Math.random() * numFaces) + 1; //Generer tilfeldige tall mellom 0 inkl. og 1 eks.!
    results.push(randomNum);
  }

  return results;
}
//sjekkr i console!
console.log(diceRoller(4));
console.log(diceRoller(6));
console.log(diceRoller(5, 20));

/******************************************************************************
3.

Make the following function:

The function should take in 1 array of strings.

Inside the function, do this:

Write a loop that loops strings in the array, and does the following:
- Removes whitespace from the beginning and end of each word
- Converts all the words to lower case

Use a "FOR of" loop.

After the loop, use a method to join the array into a string with a single 
space between the words (" "), and return the resulting string.

Example:
[" thIS", "teXt  ", " nEeds ", "to", "BE", "cleANED   ", " Up"]
should return:
"this text needs to be cleaned up"
******************************************************************************/
function cleanArray(arr) {
  // definere function med en parameter
  const cleanedWords = [];

  for (const word of arr) {
    // brukt av for of loop
    // fjerne mellomrom og konverter til små bokstaver
    const cleanedWord = word.trim().toLowerCase();
    cleanedWords.push(cleanedWord);
  }

  // Slå sammen cleaned words med enkelt mellomrom
  return cleanedWords.join(" ");
}

const result = cleanArray([
  " thIS",
  "teXt  ",
  " nEeds ",
  "to",
  "BE",
  "cleANED   ",
  " Up",
]);
console.log(result);
/******************************************************************************
4.

EXTRA CREDIT:

(This assignment is not mandatory, only for those who want an extra challenge)

Make a function called 'helloChecker' that takes in 1 string 
as a parameter.

Write code that checks all the words in the string if they match the word for 
'hello' in any of these languages:

hello - english
ciao - italian
salut - french
hallo - german
hola - spanish
czesc - polish

If any of the words in the string matches any of these, the function should 
return: "HELLO detected in (name of the language)."

If none of the words in the string match any of the words for hello in the 
different languages, your function should return: "No HELLO detected."

PS: Make sure the function is case insensitive, both 'Hello' and 'hello' 
should be detected.

I have provided some string variables to test your function with.
******************************************************************************/
const greetings = [
  "Hello, how are you today?",
  "Diciamo ciao prima di andare!",
  "Salut, ça va bien?",
  "Kannst du mich hören? Hallo!",
  "Hva er regex?",
  "Nos saludamos con un alegre hola.",
  "Ona pomachała i powiedziała cześć z uśmiechem.",
  "Good afternoon gentlemen!",
];
function helloChecker(inputString) {
  //enkelt string parameter
  // Definere
  const greetingsMap = {
    hello: "English",
    ciao: "Italian",
    salut: "French",
    hallo: "German",
    hola: "Spanish",
    czesc: "Polish",
  };

  //input string convertere lower case til ensure case og deles opp i individuelle ord ved å bruke split(/\W+/)
  const words = inputString.toLowerCase().split(/\W+/);
  // sjekke hvert ord
  for (const word of words) {
    //ved brukt av for of loop
    if (greetingsMap[word]) {
      return `HELLO detected in ${greetingsMap[word]}.`; // returnere dette!
    }
  } // hviss ikke matcher!
  return "No HELLO detected."; //retur dette!
}
for (const greeting of greetings) {
  // ved brukt av for of loop
  console.log(helloChecker(greeting));
}
/******************************************************************************
5.

EXTRA CREDIT:

(This assignment is not mandatory, only for those who want an extra challenge)

Complete the function below to accomplish the following:

Return the string received in the first parameter with the 
following alterations:

any letter in the string matching charA (the second parameter in the function) 
will be replaced with charB (the third parameter) and VICE VERSA - meaning 
letters matching charA will be replaced with charB, and letters matching charB 
will be replaced with charA. See the expected console log comments below.

Examples:

doubleSwap("this is a string", "i", "s")
should return "thsi si a itrsng"

doubleSwap("m#ybe #nother #ppro#ch is necess#ry", "#", "a")
should return "maybe another approach is necessary"

doubleSwap("what is the point of this?", "o", "t")
should return "whao is ohe ptino tf ohis?"
******************************************************************************/

function doubleSwap(string, charA, charB) {
  //your code here
}

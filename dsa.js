// Data Structures and Algorithms: 

// You are given a book as input. Write a function that takes all the words in the book as an input and returns the frequency of each word. Consider how you will take in the input, what data structures to use, and edge cases other than the given example. Test your function with 3 different inputs other than the example, and show that it works for the edge cases as well.

// Example:

// Input: “Is your favorite car brand BMW? Mine is Toyota.” 

// Output:
// is->2
// your->1
// favorite->1
// car->1
// brand->1
// BMW->1
// mine->1
// toyota->1

const inputStr = "Is your favorite car brand BMW? Mine is Toyota.";
const inputStr2 = "#12 street, City, cIty, country. Test";
const inputStr3 = " the Model X SUV in 2015, the higher volume Model 3 sedan in 2017, and the Model Y crossover in 2020";
const inputStr4 = "In July 2018, the company donated $37.5 million to kindergarten to 12th grade science, technology, engineering, and mathematics education in Nevada.";

function wordCounts(input) {
  let wordCounts = {};
  input = input.replace(/[^a-zA-Z ]/g, "");
  input = input.toLowerCase();
  input = input.trim();
  input = input.replace(/ +(?= )/g, '');
  let inputs = input.split(" ");
  inputs.forEach((word) => {
    if (Object.keys(wordCounts).includes(word)) {
      wordCounts[word] += 1;
    }
    else {
      wordCounts[word] = 1;
    }
  });
  return wordCounts;
}
let wc = wordCounts(inputStr);
Object.keys(wc).forEach((key) => {
  console.log(key + " -> " + wc[key]);
});
console.log("-------------------------------");
let wc1 = wordCounts(inputStr2);
Object.keys(wc1).forEach((key) => {
  console.log(key + " -> " + wc1[key]);
});
console.log("-------------------------------");
let wc2 = wordCounts(inputStr3);
Object.keys(wc2).forEach((key) => {
  console.log(key + " -> " + wc2[key]);
});
console.log("-------------------------------");
let wc3 = wordCounts(inputStr4);
Object.keys(wc3).forEach((key) => {
  console.log(key + " -> " + wc3[key]);
});
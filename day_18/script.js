"use strict";

document
  .getElementById("wordsForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const words = document.getElementById("words").value;

    const wordCounts = countWords(words);

    displayWordCounts(wordCounts);
  });

function countWords(input) {
  const wordsArray = input.toLowerCase().split(/\s*,\s*/);
  const wordCounts = {};

  wordsArray.forEach((word) => {
    wordCounts[word] = (wordCounts[word] || 0) + 1;
  });

  return wordCounts;
}

function capitalFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function displayWordCounts(wordCounts) {
  const resultDiv = document.getElementById("count");
  resultDiv.innerHTML = ""; 
  
  for (const [word, count] of Object.entries(wordCounts)) {
    const paragraph = document.createElement("p");
    const timesText = count === 1 ? "serving" : "servings";
    const capitalizedWord = capitalFirstLetter(word);
    paragraph.textContent = `${capitalizedWord}: ${count} ${timesText}`;
    resultDiv.appendChild(paragraph);
  }
}

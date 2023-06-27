let letterBoard = document.getElementById('letterBoard');
let letters = ['a', 'b', ' c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
letters.forEach(letter => {
    let letterBtn = document.createElement('button');
    letterBtn.innerHTML = letter;
    letterBtn.setAttribute("id", letter);
    letterBoard.appendChild(letterBtn);
});
let maxLives = 10; //might make it smaller depending on how i do the picture for missile 
let gameWords = ['malware', 'phishing', 'spam', 'spyware', 'trojan', 'abcdefg', 'password', 'passcode', 'hacking'];
let selectedWord = gameWords[Math.floor(Math.random() * gameWords.length)];
let hiddenWord = Array(selectedWord.length).fill('_');
let wordDisplay = document.getElementById('wordDisplay');
wordDisplay.innerHTML = hiddenWord.join(" ");
console.log(selectedWord);
//add function to start game
//add function to check if the letter is in the word
//add function to minus life if wrong and end game at 0
//add function to add letter to the word if correct
//add function to check when the word is complete and invoke a win function
//add a win function
//add function of end game to call above when game is at 0
//add function to reset game

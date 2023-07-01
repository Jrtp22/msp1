let letterBoard = document.getElementById('letterBoard');
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
letters.forEach(letter => {
    let letterBtn = document.createElement('button');
    letterBtn.innerHTML = letter;
    letterBtn.setAttribute("id", letter);
    letterBoard.appendChild(letterBtn);
});
let maxLives = 10; //might make it smaller depending on how i do the picture for missile 
//let gameWords = ['malware', 'phishing', 'spam', 'spyware', 'trojan', 'abcdefg', 'hackword', 'passcode', 'hacking'];
let gameWords =  ['malware']
let selectedWord = gameWords[Math.floor(Math.random() * gameWords.length)];
let hiddenWord = Array(selectedWord.length).fill('_');
let wordDisplay = document.getElementById('wordDisplay');
wordDisplay.innerHTML = hiddenWord.join(" ");
console.log(selectedWord);

function win() {
    alert("you win");
}
//add function to check when the word is complete and invoke a win function
function checkWin() {
    if (hiddenWord.join("") === selectedWord) {
        win();
    }
}

//add function of end game to call above when game is at 0
function checkLives() {
    if (maxLives === 0) {
        loseGame();
    }
}
//add function to check if the letter is in the word
letterBoard.addEventListener('click', (e) => {
    let letter = e.target.innerHTML;
    checkLetter(letter);
})
function checkLetter(letter) {
    let wordIndex = selectedWord.split('');
    let wordArray = wordIndex.map((char, index) => {
    
    })
}
//add function to minus life if wrong and end game at 0
//add function to add letter to the word if correct



//add a win function
function loseGame() {
    alert("you lose :(");
}


//add function to reset game

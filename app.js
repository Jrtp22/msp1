let gameBoard = document.getElementById('gameBoard');
let letterBoard = document.getElementById('letterBoard');
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
letters.forEach(letter => {
    let letterBtn = document.createElement('button');
    letterBtn.innerHTML = letter;
    letterBtn.setAttribute("id", letter);
    letterBoard.appendChild(letterBtn);
});
let maxLives = 9; //might make it smaller depending on how i do the picture for missile 
let rocket = document.getElementById('rocketMan');
let gameWords = ['malware', 'password', 'phishing', 'spam', 'spyware', 'trojan', 'abcdefg', 'hackword', 'passcode', 'hacking', 'impossible', 'code', 'matrix'];
//let gameWords =  ['malware']
let selectedWord = gameWords[Math.floor(Math.random() * gameWords.length)];
let hiddenWord = Array(selectedWord.length).fill('_');
let wordDisplay = document.getElementById('wordDisplay');
wordDisplay.innerHTML = hiddenWord.join(" ");
console.log(selectedWord);
function showLives() {
    let displayLives = document.getElementById('maxLives');
    displayLives.innerHTML = 'lives: ' + maxLives;
}
showLives();

//add a win function
function win() {
    setTimeout(() => {
        window.location.reload()
    }, 4000);
    window.alert("You Win! The world is saved!");
    ;
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
//add function to add letter to the word if correct
//add function to minus life if wrong and end game at 0
//add function to check if the letter is in the word
letterBoard.addEventListener('click', (e) => {
    let letter = e.target.innerHTML;
    checkLetter(letter);
})
function checkLetter(letter) {
    let wordIndex = selectedWord.split('');
    let wordArray = wordIndex.map((char, index) => {
        if (char === letter) {
            return index;
        }
        return -1;
    }).filter(index => index !== -1);

    if (wordArray.length > 0) {
        wordArray.forEach(index => {
            hiddenWord[index] = letter;
        });
        wordDisplay.innerHTML = hiddenWord.join(" ");
    } else {
        maxLives--;
        let rocketImage = document.getElementById('rocket');
        rocketImage.setAttribute('src', `assets\\${maxLives}.png`);
        rocket.appendChild(rocketImage);
        console.log(maxLives);
        showLives();
        checkLives();
    }

    checkWin();
}
//add function to reset game
function loseGame() {
    setTimeout(() => {
        window.location.reload()
    }, 7000)
    let boom = document.createElement('img');
    boom.setAttribute('src', 'assets\\0.png');
    boom.setAttribute('id', 'boom');
    gameBoard.appendChild(boom);
    alert("you lose :( the word was " + selectedWord + "! The missile launched!");
}




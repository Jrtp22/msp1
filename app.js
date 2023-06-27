let letterBoard = document.getElementById('letterBoard');
let letters = ['a', 'b', ' c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
letters.forEach(letter => {
    let letterBtn = document.createElement('button');
    letterBtn.innerHTML = letter;
    letterBtn.setAttribute("id", letter);
    letterBoard.appendChild(letterBtn);
});


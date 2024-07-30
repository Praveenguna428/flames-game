function calculateFlames() {
    var yourName = document.getElementById("yourName").value.toLowerCase();
    var partnerName = document.getElementById("partnerName").value.toLowerCase();

    // Remove spaces
    yourName = yourName.replace(/\s/g, "");
    partnerName = partnerName.replace(/\s/g, "");

    // Calculate common letters
    var commonLetters = 0;
    for (var i = 0; i < yourName.length; i++) {
        var char = yourName[i];
        if (partnerName.includes(char)) {
            commonLetters++;
            partnerName = partnerName.replace(char, "");
        }
    }

    var totalLetters = yourName.length + partnerName.length;
    var flames = "FLAMES";

    while (flames.length > 1) {
        var index = (totalLetters % flames.length) - 1;
        if (index === -1) {
            index = flames.length - 1;
        }
        flames = flames.slice(0, index) + flames.slice(index + 1);
    }

    var result;
    var symbol;
    switch (flames) {
        case "F":
            result = "Friends";
            symbol = "👫";
            break;
        case "L":
            result = "Lovers";
            symbol = "💖";
            break;
        case "A":
            result = "Affection";
            symbol = "💕";
            break;
        case "M":
            result = "Marriage";
            symbol = "💍";
            break;
        case "E":
            result = "Enemies";
            symbol = "😠";
            break;
        case "S":
            result = "Siblings";
            symbol = "👨‍👩‍👧‍👦";
            break;
        default:
            result = "Error";
            symbol = "❌";
    }

    document.getElementById("result").innerHTML = `Result: <span class="${result}">${result} ${symbol}</span>`;
}

function createBalloons() {
    const colors = ['#ff6f61', '#ffcc5c', '#88d8b0', '#6c5ce7', '#fd79a8'];
    for (let i = 0; i < 20; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.animationDuration = Math.random() * 5 + 5 + 's';
        balloon.style.animationDelay = Math.random() * 2 + 's';
        document.body.appendChild(balloon);
    }

    for (let i = 0; i < 50; i++) {
        const paper = document.createElement('div');
        paper.classList.add('falling-paper');
        paper.style.left = Math.random() * 100 + 'vw';
        paper.style.animationDuration = Math.random() * 10 + 5 + 's';
        paper.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
        document.body.appendChild(paper);
    }
}

window.onload = createBalloons;

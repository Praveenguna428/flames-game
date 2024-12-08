function calculateFlames() {
    let yourName = document.getElementById("yourName").value.toLowerCase().replace(/\s/g, "");
    let partnerName = document.getElementById("partnerName").value.toLowerCase().replace(/\s/g, "");

    // Remove common letters
    let yourNameArr = yourName.split("");
    let partnerNameArr = partnerName.split("");

    for (let i = 0; i < yourNameArr.length; i++) {
        let index = partnerNameArr.indexOf(yourNameArr[i]);
        if (index !== -1) {
            yourNameArr.splice(i, 1);
            partnerNameArr.splice(index, 1);
            i--; // Adjust index after removal
        }
    }

    // Calculate remaining letters
    let totalLetters = yourNameArr.length + partnerNameArr.length;

    // FLAMES logic
    let flames = ["F", "L", "A", "M", "E", "S"];

    while (flames.length > 1) {
        let index = (totalLetters % flames.length) - 1;
        if (index === -1) {
            index = flames.length - 1;
        }
        flames.splice(index, 1);
    }

    // Result mapping
    const resultMap = {
        "F": "Friends",
        "L": "Lovers",
        "A": "Affection",
        "M": "Marriage",
        "E": "Enemies",
        "S": "Siblings"
    };

    const result = resultMap[flames[0]];
    const resultElement = document.getElementById("result");

    // Display Result
    resultElement.innerText = "Result: " + result;

    // Add Animation
    resultElement.style.color = getRandomColor();
    resultElement.style.animation = "pop 1s ease";

    // Create Floating Effect
    createFloatingElements(result);
}

// Generate Random Color
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Create Floating Elements
function createFloatingElements(result) {
    const body = document.body;
    const floatingText = document.createElement("div");
    floatingText.innerText = result;
    floatingText.style.position = "absolute";
    floatingText.style.color = getRandomColor();
    floatingText.style.fontSize = "18px";
    floatingText.style.top = Math.random() * window.innerHeight + "px";
    floatingText.style.left = Math.random() * window.innerWidth + "px";
    floatingText.style.opacity = 1;
    floatingText.style.transition = "opacity 2s ease, transform 2s ease";
    body.appendChild(floatingText);

    setTimeout(() => {
        floatingText.style.opacity = 0;
        floatingText.style.transform = "translateY(-50px)";
        setTimeout(() => floatingText.remove(), 2000);
    }, 1000);
}

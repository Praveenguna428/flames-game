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

    document.getElementById("result").innerText = "Result: " + resultMap[flames[0]];
}

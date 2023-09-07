// JavaScript for handling form submission and displaying results
const paintSelectorForm = document.getElementById("paintSelector");
const paintResults = document.getElementById("paintResults");
const turrets = ["firebird", "freeze", "isida", "hammer", "twins", "ricochet", "smoky", "thunder", "vulcan", "railgun", "shaft"];

function calculate() {

    // Retrieve input values
    var enemyTurrets = [];
    turrets.forEach(function (turret) {
        const input = document.getElementById(`${turret}Count`);
        const value = input.value;
        enemyTurrets.push({
            name: turret,
            count: value
        });
    });

    var paintList = [...m3Paints, ...specialPaints];
    if (document.getElementById("includeM2").checked) {
        paintList = [...m2Paints, ...paintList];
    }

    // Calculate results
    var results = [];
    paintList.forEach(function (paint) {
        var score = 0;
        enemyTurrets.forEach(function (enemyTurret) {
            if (paint[enemyTurret.name]) {
                score += paint[enemyTurret.name] * enemyTurret.count;
            }
        });
        results.push({
            name: paint.name,
            score: score
        });
    });

    // Sort results
    results.sort(function (a, b) {
        return b.score - a.score;
    });

    // Display results
    paintResults.innerHTML = "";
    results.forEach(function (result) {
        const li = document.createElement("li");
        li.innerHTML = result.name + ": ";
        const button = document.createElement("button");
        button.innerText = result.score;
        button.style.cursor = "pointer";
        button.addEventListener("click", function () {
            var formulaText = "";
            enemyTurrets.forEach(function (enemyTurret) {
                var paint = paintList.find(paint => paint.name === result.name);
                if (enemyTurret.count > 0 && paint[enemyTurret.name]) {
                    formulaText += `${paint[enemyTurret.name]} ${enemyTurret.name[0].toUpperCase() + enemyTurret.name.slice(1)} * ${enemyTurret.count} + `;
                }
            });
            formulaText = formulaText.substring(0, formulaText.length - 3);
            if (button.innerText.includes("(")) {
                button.innerText = button.innerText.replace(/\(.*\)/, "");
            } else {
                button.innerText = `${result.score} (${formulaText})`;
            }
        });
        li.appendChild(button);
        paintResults.appendChild(li);
    });

}

function reset() {
    turrets.forEach(function (turret) {
        const input = document.getElementById(`${turret}Count`);
        input.value = 0;
    });
}
const { m3Paints, m2Paints, specialPaints } = require("./paints.js");

const teamSize = 3;

const paints = [...m3Paints, ...m2Paints, ...specialPaints];
const turrets = ["firebird", "freeze", "isida", "hammer", "twins", "ricochet", "smoky", "thunder", "vulcan", "railgun", "shaft"],
    unacceptableTurrets = ["thunder", "vulcan", "railgun", "shaft"],
    acceptableTurrets = turrets.filter(x => !unacceptableTurrets.includes(x));

/* Aim:
To find the best combination of turrets for a team of 3 players.

Method:
1. Loop through all possible combinations of 3 turrets.
2. Loop through all paints and calculate the total paint protection from the 3 turrets.
3. Obtain the max paint protection from the 3 turrets and save the combination of turrets and paint protection.
4. Continue step 2 until all turret combinations have been looped through.
5. Find the turret combination with the minimum max paint protection.
*/

var turretCombinationIndex = Array(teamSize).fill(-1);
var bestTurretCombination = {
    turrets: Array(teamSize).fill(-1),
    maxProtection: {
        name: "",
        protection: -1
    }
}

// First loop through all possible combinations of 3 turrets
function turretLoop(depth, lastTurretIndex)  {
    if (depth != teamSize) {
        // Continue looping through all possible combinations of 3 turrets
        for (var i = lastTurretIndex + 1; i < acceptableTurrets.length; i++) {
            turretCombinationIndex[depth] = i;
            turretLoop(depth + 1, i);
        }
    } else {
        // Step 2: Loop through all paints and calculate the total paint protection from the 3 turrets.
        var totalPaintProtection = {
            protection: 0,
            name: ""
        };
        for (var l = 0; l < paints.length; l++) {
            var paintProtection = 0;
            for (var m = 0; m < teamSize; m++) {
                if (acceptableTurrets[turretCombinationIndex[m]] in paints[l]) {
                    paintProtection += paints[l][acceptableTurrets[turretCombinationIndex[m]]];
                } else {
                    paintProtection += 0;
                }
            }
            if (paintProtection > totalPaintProtection.protection) {
                totalPaintProtection.protection = paintProtection;
                totalPaintProtection.name = paints[l].name;
            }
        }

        // Step 3: Compare the preexsiting best turret combination with the current turret combination
        if (totalPaintProtection.protection < bestTurretCombination.maxProtection.protection || bestTurretCombination.maxProtection.protection == -1) {
            bestTurretCombination.turrets = turretCombinationIndex.slice();
            bestTurretCombination.maxProtection.protection = totalPaintProtection.protection;
            bestTurretCombination.maxProtection.name = totalPaintProtection.name;
        }
    }
}

turretLoop(0, -1);
// Step 5: Print the best turret combination
console.log("Best turret combination: ");
console.log(bestTurretCombination.turrets.map(x => acceptableTurrets[x]));
console.log("Paint protection: " + bestTurretCombination.maxProtection.protection + " from " + bestTurretCombination.maxProtection.name);
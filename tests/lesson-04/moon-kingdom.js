function createCharacters() {
    const multipleCharacter = [
        {charName: "tai.hoang", charLevel: 9, charHealth: 99},
        {charName: "minh.nguyent", charLevel: 19, charHealth: 199},
        {charName: "ngoc.vo2", charLevel: 39, charHealth: 399}
    ];
    const charactersPowerUp = multipleCharacter.map((powerUp) => ({
            charName: powerUp.charName.toUpperCase(),
            charLevel: powerUp.charLevel * 2,
            charHealth: powerUp.charHealth * 3
    }))
    // console.log(charactersPowerUp);

    const possibleWinners = charactersPowerUp.filter(filterChar => filterChar.charHealth > 1000);
    console.log(possibleWinners);
}

function printLeaderboard(){
    const players = [
        {name: "Nah", score: 999},
        {name: "VD", score: 666},
        {name: "Acy", score: 83},
        {name: "Torai9", score: 9},
        {name: "Tai", score: 2105},
    ];

    const trueLeaderboard = players.sort((a, b) => b.score - a.score);
    // console.log(trueLeaderboard);

    for(let i = 0; i < trueLeaderboard.length; i++){
        let medal = "  ";

        if (i == 0){
            medal = "🥇";
        } else if (i == 1){
            medal = "🥈";
        } else if (i == 2){
            medal = "🥉";
        }

        console.log(medal + " " + (i + 1) + ". " + trueLeaderboard[i].name + " - " + trueLeaderboard[i].score + " pts")
    }
}

createCharacters();
printLeaderboard();
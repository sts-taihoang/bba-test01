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
    console.log(charactersPowerUp);

    const possibleWinners = charactersPowerUp.filter(filterChar => filterChar.charHealth > 1000);
    console.log(possibleWinners);
}

createCharacters();
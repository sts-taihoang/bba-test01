function findPairsDivisibleBy17(){
    const firstArray = [];
    const finalArray = [];
    for(let i = 1; i < 101; i++){
        firstArray.push(i);
    }
    //console.log(firstArray);

    for(let i = 0; i < firstArray.length; i++){
        let firstNumber = firstArray[i];
        for(let j = i + 1; j < firstArray.length; j++){
            let secondNumber = firstArray[j];
            if ((firstNumber + secondNumber) % 17 == 0){
                finalArray.push({firstNumber, secondNumber})
                //break;
            }
        }
    }
    //console.log(finalArray);
    for(let i = 0; i < finalArray.length; i++){
        console.log("(" + finalArray[i].firstNumber + ", " + finalArray[i].secondNumber + ") = " + (finalArray[i].firstNumber + finalArray[i].secondNumber))
    }

    console.log("Tổng cộng: " + finalArray.length + " cặp");
}

findPairsDivisibleBy17();
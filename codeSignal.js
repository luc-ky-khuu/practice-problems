// avoidObstacles
function solution(inputArray) {
    var counter = 1;
    var check = false;
    while (check === false) {
        check = true
        for (var x = 0; x < inputArray.length; x++) {
            if (inputArray[x] % counter === 0) {
                check = false;
                counter++;
                continue;
            }
        }
        if (check === true) {
            return counter;
        }
    }
}

// boxBlur
function solution(image) {
    var blurred = [];
    var lineBlur = []
    for (var i = 1; i < image.length - 1; i++) {
        for (var x = 1; x < image[i].length-1; x++) {
            var average = 0
            for (var y = -1; y < 2; y++) {
                average += image[i-1][x+y]
                average += image[i+1][x+y]
                average += image[i][x+y]
            }
            lineBlur.push(Math.floor(average/9))
        }
        blurred.push(lineBlur);
        lineBlur = [];
    }
    return blurred
}

// minesweeper
function solution(matrix) {
    var lineArray = [];
    var arrayContainer = [];
    var counter = 0
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            for (var y = -1; y < 2; y++) {
                for (var x = -1; x < 2; x++) {
                    if ((i + y) < 0 || (x + j) < 0 || (i + y) >= matrix.length || (x + j) >= matrix[i].length) {
                        continue
                    } else if (y === 0 && x === 0) {
                        continue
                    }else if (matrix[i + y][j + x] === true) {
                        counter++
                    }
                }
            }
            lineArray.push(counter)
            counter = 0;
        }
        arrayContainer.push(lineArray);
        lineArray = [];
    }
    return arrayContainer;
}

//array replace
function solution(inputArray, elemToReplace, substitutionElem) {
    for (var i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === elemToReplace) {
            inputArray[i] = substitutionElem;
        }
    }
    return inputArray
}

//evenDigitsOnly
function solution(n) {
    var num = n.toString()
    for (var i = 0; i < num.length; i++) {
        if (num[i] % 2 !== 0) {
            return false;
        }
    }
    return true;
}

// variableName
function solution(name) {
    if (!isNaN(parseInt(name[0]))) {
        return false;
    }
    for (var i = 0; i < name.length; i++) {
        if ((name.charCodeAt(i) > 64 && name.charCodeAt(i) < 91) || (name.charCodeAt(i) > 96 && name.charCodeAt(i) < 122) ||
        (name.charCodeAt(i) === 95) || (name.charCodeAt(i) > 47 && name.charCodeAt(i) < 58)) {
            continue
        } else {
            return false
        }
    }
    return true;
}

// alphabeticShift
function solution(inputString) {
    let newString = '';
    for (let i = 0; i < inputString.length; i++) {
        let charCode = inputString.charCodeAt(i);
        charCode++;
        if (charCode === 123) {
            charCode = 97;
        }
        newString += String.fromCharCode(charCode)
    }
    return newString
}

// chessBoardCellColor
function solution(cell1, cell2) {
    let c1 = cell1.charCodeAt(0)
    let c2 = cell2.charCodeAt(0)
    let c1Value = c1 + parseInt(cell1[1])
    let c2Value = c2 + parseInt(cell2[1]);
    if ((c1Value % 2) === (c2Value % 2)) {
        return true;
    }
    return false;
}

//Circle of Numbers
function solution(n, firstNumber) {
    const half = n / 2;
    if (firstNumber < half) {
        return firstNumber += half
    }
    return firstNumber -= half
}

// depositProfit
function solution(deposit, rate, threshold) {
    let amount = deposit;
    let year = 0;
    while (amount < threshold) {
        amount += (amount * (rate / 100))
        year++;
    }
    return year;
}

// absoluteValuesSumMinimization
function solution(a) {
    let lowestSum = 0;
    let currentSum = 0;
    let index = 0;
    for (let i = 0; i < a.length; i++) {
        for (let x = 0; x < a.length; x++) {
            currentSum += (Math.abs(a[x] - a[i]))
        }
        if (i === 0) {
            lowestSum = currentSum
        }
        if (currentSum < lowestSum) {
            lowestSum = currentSum;
            index = i;
        }
        currentSum = 0;
    }
    return a[index]
}

// Election Winners
function solution(votes, k) {
    const max = Math.max(...votes);
    let count = 0;
    const maxArr = [];
    for (let i = 0; i < votes.length; i++) {
        if ((votes[i] + k) > max) {
            count++
        }
        if (votes[i] === max) {
            maxArr.push(votes[i]);
        }
    }
    if (count === 0 && maxArr.length === 1) {
        count++
    }
    return count
}

// Is Mac48 Address
function solution(inputString) {
    const arr = inputString.split('-');
    if (arr.length !== 6) {
        return false
    }
    for (let i = 0; i < 6; i++) {
        if (arr[i].length !== 2) {
            return false
        }
        const nums = /[0-9]/g;
        const letters = /[A-F]/g;
        if ((!arr[i][0].match(nums) && !arr[i][0].match(letters)) || (!arr[i][1].match(nums) && !arr[i][1].match(letters))) {
            return false
        }
    }
    return true
}

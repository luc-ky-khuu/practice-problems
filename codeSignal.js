//File Naming
function solution(names) {
    const obj = {};
    const arr = [];
    for (let i = 0; i < names.length; i++) {
        if (obj[names[i]]) {
            if (arr.indexOf(names[i] + `(${obj[names[i]]})`) > -1) {
                while (arr.indexOf(names[i] + `(${obj[names[i]]})`) > -1) {
                    obj[names[i]] += 1;
                }
                arr.push(names[i] + `(${obj[names[i]]})`);
            } else {
                arr.push(names[i] + `(${obj[names[i]]})`)
                obj[names[i]] = obj[names[i]] + 1;
            }
        } else if (arr.indexOf(names[i]) > -1) {
            obj[names[i]] = 1;
            arr.push(names[i] + `(${obj[names[i]]})`)
        } else {
            arr.push(names[i])
            obj[names[i]] = 1;
        }
    }
return arr
}

//digitsProduct
function solution(product) {
    let num = '';
    let newProd = product
    if (product === 0) {
        return 10
    }
    if (product === 1) {
        return 1
    }
    for (let i = 9; i > 1; i--) {
        if (newProd % i === 0) {
            num = i.toString() + num;
            newProd = newProd/i
            i = 10
        }
    }
    if (!num || newProd !== 1) {
        return -1
    }
    return Number(num);
}

//DifferentSquares
function solution(matrix) {
    let obj = {};
    for (let i = 0; i < matrix.length - 1; i++) {
        for (let x = 0; x < matrix[i].length - 1; x++) {
            let str = matrix[i][x].toString() + matrix[i][x+1].toString() + matrix[i+1][x].toString() + matrix[i+1][x+1].toString();
            obj[str] = 1;
        }
    }
    return Object.keys(obj).length
}

// rotateImage
function solution(a) {
    const newImage = []
    let row = []
    for (let i = 0; i < a.length; i++) {
        for (let x = 0; x < a.length; x++) {
            row.push(a[(a.length - 1) - x][i])
        }
        newImage.push(row);
        row = [];
    }
    return newImage
}

// firstNotRepeatingCharacter
function solution(s) {
    const obj = {};
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]]) {
            obj[s[i]] = obj[s[i]] + 1
        } else {
            obj[s[i]] = 1
        }
    }
    for (let nums in obj) {
        if (obj[nums] === 1) {
            return nums
        }
    }
    return '_'
}

// firstDuplicate
function solution(a) {
    const obj = {};
    for (let i = 0; i < a.length; i++) {
        if (obj[a[i]]) {
            return a[i]
        } else {
            obj[a[i]] = 1
        }
    }
    return -1
}

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

// buildPalindrome
function solution(st) {
    let reversed = '';
    for (let i = (st.length - 1); i >=0; i--) {
        reversed += st[i]
    }
    let len = st.length
    for (let i = 0; i < len; i++) {
        if (st === reversed) {
            return reversed
        }
        let first = reversed.slice(0, i);
        let second = reversed.slice(i);
        reversed = first + st[i] + second;
        let firstSt = st.slice(0,len);
        let secondSt = st.slice(len);
        st = firstSt + st[i] + secondSt
    }
    return reversed
}

// isDigit
function solution(symbol) {
    if (Number(symbol) || symbol == 0) {
        return true;
    }
    return false
}

// lineEncoding
function solution(s) {
    let sameLetters = s[0];
    let arr = [];
    for (let i = 1; i < s.length; i++) {
        if (s[i] === sameLetters[0]) {
            sameLetters += s[i]
        } else {
            arr.push(sameLetters);
            sameLetters = s[i];
        }
    }
    arr.push(sameLetters);
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < 2) {
            result += `${arr[i][0]}`
        } else {
            result += `${arr[i].length}${arr[i][0]}`
        }
    }
    return result
}

// chessKnight
function solution(cell) {
    let maxMoves = 8;
    let first = cell.charCodeAt(0)
    if (first === 97 || first === 104) {
        if (cell[1] === '1' || cell[1] === '8') {
            maxMoves -= 6
        } else if (cell[1] === '2' || cell[1] === '7') {
            maxMoves -= 5
        } else {
            maxMoves -= 4
        }
    } else if (first === 98 || first === 103) {
        if (cell[1] === '1' || cell[1] === '8') {
            maxMoves -= 5
        } else if (cell[1] === '2' || cell[1] === '7') {
            maxMoves -= 4
        } else {
            maxMoves -= 2
        }
    } else {
        if (cell[1] === '1' || cell[1] === '8') {
            maxMoves -= 4
        } else if (cell[1] === '2' || cell[1] === '7') {
            maxMoves -= 2
        }
    }
    return maxMoves
}

// deleteDigit
function solution(n) {
    let max = 0;
    const x = n.toString()
    const y = x.split('');
    for (let i = 0; i < y.length; i++) {
        let num = [...y]
        num.splice(i, 1);
        if (parseInt(num.join('')) > max) {
            max = num.join('')
        }
    }
    return parseInt(max)
}

// longestWord
function solution(text) {
    let words = [];
    let lowerText = text.toLowerCase()
    let tempWord = '';
    for (let x = 0; x < text.length; x++) {
        if (lowerText.charCodeAt(x) >= 97 && lowerText.charCodeAt(x) <= 122) {
            tempWord += text[x];
        } else {
            words.push(tempWord);
            tempWord = ''
        }
    }
    words.push(tempWord)
    let longestWord = '';
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i]
        }
    }
    return longestWord
}

// checkLongestString
function checkLongestString(inputArray) {
    let longestLength = 0;
    const arrContainer = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length > longestLength) {
            longestLength = inputArray[i].length;
        }
    }
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length === longestLength) {
            arrContainer.push(inputArray[i]);
        }
    }
    return arrContainer;
}

// valid time
function solution(time) {
    const splitTime = time.split(':');
    if (parseInt(splitTime[0]) > 24 || parseInt(splitTime[1]) > 59) {
        return false;
    }
    if (parseInt(splitTime[0]) === 24) {
        return false;
    }
    return true
}

// sumUpNumbers
function solution(inputString) {
    let sum = 0;
    let num = ''
    for (let i = 0; i < inputString.length; i++) {
        if (Number(inputString[i]) || inputString[i] === '0') {
            num += inputString[i];
        } else {
            if (num === '') {
                continue;
            } else {
                sum += Number(num);
                num = '';
            }
        }
    }
    sum += Number(num);
    return sum
}

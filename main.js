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

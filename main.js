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

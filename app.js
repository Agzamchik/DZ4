var averagePositive = function() {
    var sum = 0
    var count = 0
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] > 0) {
            sum += arguments[i]
            count++
        }
    }
    if (count === 0) {
        return "Нет положительных чисел"
    } else {
        return sum / count
    }
};

// 2
var sumOfEvenSquares = function(arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i] * arr[i]
        }
    }
    return sum
};

// 3
var wordsWithTA = function(arr) {
    var result = []

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase().includes('t') && arr[i].toLowerCase().includes('a')) {
            result.push(arr[i])
        }
    }
    return result
};
console.log(averagePositive(2, -78, 45, 4, -7, -6, -10, 26, 30, 8))
console.log(sumOfEvenSquares([1, 2, 3, 4, 5, 6]))
console.log(wordsWithTA(['text', 'frontend', 'apple', 'bAnAnA', 'car']))

function basicOp(operation, value1, value2) {
    // Code
    if (operation === "+") {
        return value1 + value2
    }
    if (operation === "-") {
        return value1 - value2
    }
    if (operation === "*") {
        return value1 * value2
    }
    if (operation === "/") {
        return value1 / value2
    }
}

function test(){
    //11
    var test1 = basicOp('+', 4, 7);
    //-3
    var test2 = basicOp('-', 15, 18);
    //25
    var test3 = basicOp('*', 5, 5);
    //7
    var test4 = basicOp('/', 49, 7);

    console.log(test1);
    console.log(test2);
    console.log(test3);
    console.log(test4);
}

test();
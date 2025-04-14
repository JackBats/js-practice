function handleNumber(num, callbac1, callback2) {
    if (num % 2 == 0) {
        callbac1();
    } else {
        callback2();
    }
}

function handleEven() {
    console.log("Number is even");
}

function handleOdd() {
    console.log("Number is odd");
}
handleNumber(10, handleEven, handleOdd);
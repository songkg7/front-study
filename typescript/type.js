"use strict";
function f3(a) {
    return a * 10;
}
console.log(f3(10));
function f4(a) {
    if (a > 0) {
        return a * 10;
    }
}
console.log(f4(-5) + 5); // strictNullChecks
// noImplicitReturns option
// 반드시 모든 리턴의 경우를 구현해야한다.
function f5(a) {
    if (a > 0) {
        return a * 10;
    }
    else {
        return -1;
    }
}

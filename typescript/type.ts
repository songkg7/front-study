function f3(a: number) {
  return a * 10;
}

console.log(f3(10));

function f4(a: number) {
  if (a > 0) {
    return a * 10;
  }
}

console.log(f4(-5) + 5); // strictNullChecks

// noImplicitReturns option
// 반드시 모든 리턴의 경우를 구현해야한다.
function f5(a: number): number {
  if (a > 0) {
    return a * 10;
  } else {
    return -1;
  }
}

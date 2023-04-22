//1//
function createArray(start, end) {
    let arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}

//2//
function printNumbers(a, b) {
    let count = 1;
    for (let i = a; i <= b; i++) {
        console.log(i);
        if (count < i - a + 1) {
            count++;
        } else {
            count = 1;
        }
    }
}

//3//
function rangArray(k) {
    let arr = [];
    for (let i = 0; i < k; i++) {
        arr.push(Math.floor(Math.random() * 500) + 1);
    }
    return arr;
}

//4//
function compact(arr) {
    return [...new Set(arr)];
}

//5//
function funcName(arr) {
    return arr.reduce((acc, val) => {
      const type = typeof val;
      const last = acc.length - 1;
  
      if (acc[last] && typeof acc[last][0] === type) {
        acc[last].push(val);
      } else {
        acc.push([val]);
      }
  
      return acc;
    }, []);
  }

//6//
function calc(a, b, op) {
    if (op === 1) {
      return a - b;
    } else if (op === 2) {
      return a * b;
    } else if (op === 3) {
      return a / b;
    } else {
      return a + b;
    }
  }
  
//7//  
function findUnique(arr) {
    return arr.length === [...new Set(arr)].length;
  }
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
      for (let j = 0; j < count; j++) {
        console.log(i);
      }
      count++;
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
function separateArrays(arr) {
    const numberArr = arr.filter(el => typeof el === 'number');
    const stringArr = arr.filter(el => typeof el === 'string');
  
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        const nestedArr = separateArrays(arr[i]);
        numberArr.push(...nestedArr[0]);
        stringArr.push(...nestedArr[1]);
      }
    }
  
    return [numberArr, stringArr];
  }
  let arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
let arrNew = separateArrays(arr);
console.log(arrNew);

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
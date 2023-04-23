//1//
function sumSliceArray(arr, first, second) {
    try {
      first = parseInt(first);
      second = parseInt(second);
      
      if (first < 0 || first >= arr.length || second < 0 || second >= arr.length) {
        throw new Error('Індекс за межами діапазону масиву');
      }
      
      return arr[first] + arr[second];
      
    } catch (e) {
      if (e instanceof TypeError || e instanceof RangeError) {
        throw new Error('Перевірте введені значення: індекси мають бути числами');
      }
      
      if (e instanceof Error) {
        throw e;
      }
    }
  }

//2//
function checkAge() {
    try {
      const name = prompt('Введіть своє ім\'я:');
      const age = prompt('Введіть свій вік:');
      const status = prompt('Введіть свій статус (адмін, модератор, користувач):');
      
      if (!name || !age) {
        throw new Error('The field is empty! Please enter your age');
      }
      
      if (isNaN(parseInt(age))) {
        throw new TypeError('Введено неправильний вік: потрібно ввести число');
      }
      
      if (age < 18 || age > 70) {
        throw new RangeError('Вік користувача повинен бути в діапазоні від 18 до 70 років');
      }
      
      if (!(status === 'адмін' || status === 'модератор' || status === 'користувач')) {
        throw new EvalError('Введено неправильний статус користувача');
      }
      
      alert('Ви можете переглянути фільм');
      
    } catch (e) {
      alert('Помилка: ' + e.name + '\n\n' + e.message);
    }
  }

  //3//
  function calcRectangleArea(width, height) {
    if (typeof width !== 'number' || typeof height !== 'number') {
      throw new TypeError('Both parameters must be numbers');
    }
  
    const area = width * height;
  
    return area;
  }
  
  try {
    const width = Number(prompt('Enter the width of the rectangle:'));
    const height = Number(prompt('Enter the height of the rectangle:'));
  
    const area = calcRectangleArea(width, height);
  
    alert(`The area of the rectangle is ${area}.`);
  } catch (e) {
    alert(`Error: ${e.message}`);
  }

  //4//
  class MonthException extends Error {
    constructor(message) {
      super(message);
      this.name = 'MonthException';
    }
  }
  
  function showMonthName(month) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
  
    if (month < 1 || month > 12) {
      throw new MonthException('Incorrect month number');
    }
  
    return months[month - 1];
  }
  
  try {
    console.log(showMonthName(5));  
    console.log(showMonthName(14)); 
  } catch (e) {
    console.log(e.name, e.message);
  }

  //5//
  class NegativeIdError extends Error {
    constructor(message) {
      super(message);
      this.name = 'NegativeIdError';
    }
  }
  
  function showUser(id) {
    if (id < 0) {
      throw new NegativeIdError('ID must not be negative: ' + id);
    }
    return { id: id };
  }
  
  function showUsers(ids) {
    const result = [];
    for (let id of ids) {
      try {
        const user = showUser(id);
        result.push(user);
      } catch (error) {
        console.error(error.message);
      }
    }
    return result;
  }
   
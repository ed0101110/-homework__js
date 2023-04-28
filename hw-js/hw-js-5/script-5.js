//1//
class Circle {
    constructor(x, y, radius) {
      Object.assign(this, { x, y, radius });
    }
  
    get circumference() {
      return 2 * Math.PI * this.radius;
    }
  
    static getCircumferenceByRadius(radius) {
      return 2 * Math.PI * radius;
    }
  
    get copy() {
      return new Circle(this.x, this.y, this.radius);
    }
  
    static fromCoordsAndRadius(x, y, radius) {
      return new Circle(x, y, radius);
    }
  
    containsPoint(x, y) {
      return Math.hypot(this.x - x, this.y - y) <= this.radius;
    }
  
    toString() {
      return `Circle with center (${this.x}, ${this.y}) and radius ${this.radius}`;
    }
  }

  //2//
  function propsCount(currentObject) {
    return Object.keys(currentObject).length;
  }

  //3//
  class Person {
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }
  
    showFullName() {
      console.log(`${this.surname} ${this.name}`);
    }
  }
  
  class Student extends Person {
    constructor(name, surname, year) {
      super(name, surname);
      this.year = year;
    }
  
    showFullName(middleName) {
      console.log(`${this.surname} ${this.name} ${middleName}`);
    }
  
    showCourse() {
      const currentYear = new Date().getFullYear();
      const course = currentYear - this.year + 1;
      return course >= 1 && course <= 6 ? course : 'Invalid course';
    }
  }
  
  const stud1 = new Student("Petro", "Petrenko", 2019);
  console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
  console.log("Current course: " + stud1.showCourse()); //Current course: 4

  //4//
  class Marker {
    constructor(color, ink) {
      this.color = color;
      this.ink = ink;
    }
    print(text) {
      let inkPerSymbol = 0.5;
      let inkRequired = text.replace(/\s/g, '').length * inkPerSymbol;
      if (this.ink >= inkRequired) {
        console.log(`%c${text}`, `color: ${this.color}`);
        this.ink -= inkRequired;
      } else {
        console.log('Error: no ink');
      }
    }
  }
  
  class RefillableMarker extends Marker {
    refill(inkAmount) {
      this.ink += inkAmount;
      if (this.ink > 100) {
        this.ink = 100;
      }
    }
  }

  //5//
  class Worker {
    constructor(fullName, dayRate, workingDays) {
      this.fullName = fullName;
      this.dayRate = dayRate;
      this.workingDays = workingDays;
      this._experience = 1.2;
    }
  
    showSalary() {
      let salary = this.dayRate * this.workingDays;
      console.log(`${this.fullName} salary: ${salary}`);
      return salary;
    }
  
    showSalaryWithExperience() {
      let salaryWithExp = this.dayRate * this.workingDays * this._experience;
      console.log(`${this.fullName} salary: ${salaryWithExp}`);
      return salaryWithExp;
    }
  
    get showExp() {
      return this._experience;
    }
  
    set setExp(value) {
      this._experience = value;
    }
  }
  
  let worker1 = new Worker("John Johnson", 20, 23);
  let worker2 = new Worker("Tom Tomson", 48, 22);
  let worker3 = new Worker("Andy Ander", 29, 23);
  
  console.log(worker1.fullName);
  worker1.showSalary();
  console.log("New experience: " + worker1.showExp);
  worker1.showSalaryWithExperience();
  worker1.setExp = 1.5;
  console.log("New experience: " + worker1.showExp);
  worker1.showSalaryWithExperience();
  
  console.log(worker2.fullName);
  worker2.showSalary();
  console.log("New experience: " + worker2.showExp);
  worker2.showSalaryWithExperience();
  worker2.setExp = 1.5;
  console.log("New experience: " + worker2.showExp);
  worker2.showSalaryWithExperience();
  
  console.log(worker3.fullName);
  worker3.showSalary();
  console.log("New experience: " + worker3.showExp);
  worker3.showSalaryWithExperience();
  worker3.setExp = 1.5;
  console.log("New experience: " + worker3.showExp);
  worker3.showSalaryWithExperience();
  
  let workers = [worker1, worker2, worker3];
  workers.sort((a, b) => {
    return a.showSalaryWithExperience() - b.showSalaryWithExperience();
  });
  
  console.log("Sorted salary:");
  workers.forEach((worker) => {
    console.log(`${worker.fullName}: ${worker.showSalaryWithExperience()}`);
  }); 
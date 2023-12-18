/* ------------------------------ TASK 3 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */



function Calculator() {
    this.sum = function(a, b) {
      return a + b;
    };
  
    this.subtraction = function(a, b) {
      return a - b;
    };
  
    this.multiplication = function(a, b) {
      return a * b;
    };
  
    this.division = function(a, b) {
      if (b !== 0) {
        return a / b;
      } else {
        return "Cannot divide by zero";
      }
    };
  }
  
  const calculator = new Calculator();
  
  const a = parseFloat(prompt("Please, enter the first number"));
  const b = parseFloat(prompt("Please, enter the second number"));
  
  const sumResult = calculator.sum(a, b);
  const subtractionResult = calculator.subtraction(a, b);
  const multiplicationResult = calculator.multiplication(a, b);
  const divisionResult = calculator.division(a, b);
  
  console.log(`Sum = ${sumResult}`);
  console.log(`Subtraction = ${subtractionResult}`);
  console.log(`Multiplication = ${multiplicationResult}`);
  console.log(`Division = ${divisionResult}`);
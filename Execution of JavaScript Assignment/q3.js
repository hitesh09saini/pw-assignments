function addNumbers(num1, num2) {
    // Declare a variable using 'var'
    var sum;
  
    // Calculate the sum of the two numbers
    sum = num1 + num2;
  
    // Log the variable value before assigning a value
    console.log(`The sum before assignment: ${sum}`);
  
    return sum;
  }
  
  // Example usage:
  let num1 = 5;
  let num2 = 3;
  let result = addNumbers(num1, num2);
  
  console.log(`The sum is: ${result}`);
  
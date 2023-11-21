function manipulateString(str) {

    const manipulatedString = str.toUpperCase();

    function logString() {
      console.log(`The manipulated string is: ${manipulatedString}`);
    }
 
    return logString;
  }
  
  const originalString = "Hello, World!";
  const logManipulatedString = manipulateString(originalString);
  
  logManipulatedString(); 
  
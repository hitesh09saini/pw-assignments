{
    // Declare three variables inside a block scope
    let letVariable;
    var varVariable;
    const constVariable;
  
    console.log(`Before assignment:`);
    console.log(`letVariable: ${letVariable}`);
    console.log(`varVariable: ${varVariable}`);
    console.log(`constVariable: ${constVariable}`);
  
    letVariable = "I'm a let variable";
    varVariable = "I'm a var variable";
    constVariable = "I'm a const variable";
  
    console.log(`After assignment:`);
    console.log(`letVariable: ${letVariable}`);
    console.log(`varVariable: ${varVariable}`);
    console.log(`constVariable: ${constVariable}`);
  }
  
 
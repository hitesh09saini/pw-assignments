function greetWithPromise(name) {
    return new Promise((resolve, reject) => {
      if (typeof name === 'string') {
        const greeting = `Hello, ${name}!`;
        resolve(greeting);
      } else {
        reject(new Error('Input must be a string.'));
      }
    });
  }

  const name = "Hitesh";
  
  greetWithPromise(name)
    .then((greeting) => {
      console.log(greeting); 
    })
    .catch((error) => {
      console.error(error.message);
    });
  
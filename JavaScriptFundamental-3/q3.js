function countProperties(obj) {
  
    let count = 0;
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            count++;
        }
        
    }

    return count;
}

const inputObject = {
    property1: 'value1',
    property2: 'value2',
    property3: 'value3'
};

const numProperties = countProperties(inputObject);
console.log(`The object has ${numProperties} properties.`);

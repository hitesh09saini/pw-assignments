// standerd , express , overnight
let package = "standard"; 

let output ="";

switch(package){

    case "standard" :
        output = "3-5 days";
        break;
    case "express" :
        output = "1-2 days";
        break;
    case "overnight" :
        output ="would be delivered the next day";
        break;
    default :
    output = "Invalid";
    break;
}

console.log(output);
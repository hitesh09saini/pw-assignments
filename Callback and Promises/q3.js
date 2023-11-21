function againDays(Info) {

    let fullName;

    fullName = Info.firstName + " " + Info.lastName;

    const ageInDays = Info.age * 365;


    function logMessage() {
        console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
    }


    return logMessage;

}


const Info = {
    firstName: 'Hitesh',
    lastName: 'Saini',
    age: 23
}


const logAge = againDays(Info);

logAge();
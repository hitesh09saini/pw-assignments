const students = [
    {
        name: "Mithun",
        marks: 95,
    },
    {
        name: "Prabir",
        marks: 75,
    },
    {
        name: "Alka",
        marks: 92,
    },
    {
        name: "Shivam",
        marks: 70,
    },
    {
        name: "Farman",
        marks: 99,
    },

];

// check result 


function CheckResults(name) {

    if (students.find((t) => { if (t.name === name) { return true; } })) {

        if (students.find((t) => { if (t.name === name) { return t; } }).marks > 90) {
            console.log(`Congratulations ${name}! You have cleared the exam`);
        } else {
            console.log("Sorry ! You have not cleared the exam");
        }

    } else {
        console.log('Invalid user !!');
    }




}



CheckResults("Mithun")
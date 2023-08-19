let student ={
    Name:"Hitesh",
    Age:21,
    Grade:'A'
}


function updateGrade(grade){
    student.Grade = grade;
}

console.log(student.Grade);

updateGrade('A++')

console.log(student.Grade);


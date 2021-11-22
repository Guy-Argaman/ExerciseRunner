'use strict'

// 53.Students: 
// a. Create a students array (use the same algorithm as before and name it 
// createStudents())
// b. Read the student name from the user until “quit” is entered. Populate the 
// students array with student objects. 
// c. Read 3 grades for each student (each student should have a grades array).
// d. Calculate the average of each student. 
// e. Write the function findWorstStudent(students).
// f. Write the function sortStudentsByGrade(students).
// g. Write the function sortStudentsByName(students)

var gStudents = [];

createStudents();
findWorstStudent(gStudents);
// sortStudentsByNames(gStudents);
// sortStudentsByGrades(gStudents);

function sortStudentsByNames(students) {
    students.sort(function (a, b) { return a.name >= b.name });
}

function sortStudentsByGrades(students) {
    students.sort(function (a, b) { return a.avg >= b.avg });
}

function findWorstStudent(students) {

    var worstGrade = Infinity;
    var worstStudent = '';
    for (var i = 0; i < students.length; i++) {

        if (students[i].avg < worstGrade) {
            worstGrade = students[i].avg;
            worstStudent = students[i].name;
        }
    }
    console.log(`The worst grade is ${worstGrade}`);
    console.log(`The worst student is ${worstStudent}`);
}

function createStudents() {
    while (userInput !== 'quit') {
        var userInput = prompt('Enter a name (type \'quit\' to quit)')
        if (userInput === 'quit') {
            continue;
        }
        gStudents.push(createStudent(userInput))
        var sum = 0;
        for (var i = 0; i < 3; i++) {
            var grade = +prompt('Enter a grade');
            gStudents[gStudents.length - 1].grades.push(grade);
            sum += grade;
        }
        var avg = sum / gStudents[gStudents.length - 1].grades.length;
        gStudents[gStudents.length - 1].avg = avg;
    }
    console.log(gStudents);
}

function createStudent(name, grades = [], avg = 0) {
    return {
        name,
        grades,
        avg,
    }
}
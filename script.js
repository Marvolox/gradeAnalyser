let student_grades = [];

function grade_analyser() {
    const studentName = document.getElementById("studentName").value;
    const studentGrade = parseFloat(document.getElementById("studentGrade").value);

    if (isNaN(studentGrade) || studentGrade <= 0) {
        alert("ERROR");
        return;
    }

    const student = {
        name: studentName,
        grade: studentGrade
    };
}

student_grades.push(student)


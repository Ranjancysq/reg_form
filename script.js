document.addEventListener("DOMContentLoaded", function () {
    loadStoredData();
});

document.getElementById("studentForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var genderElements = document.getElementsByName("gender");
    var course = document.getElementById("course").value;
    var email = document.getElementById("email").value;

    var selectedGender = Array.from(genderElements).find(g => g.checked);
    var gender = selectedGender ? selectedGender.value : "not selected";

    var studentData = { name, age, gender, course, email };

    var students = JSON.parse(localStorage.getItem("students")) || [];
    students.push(studentData);

    localStorage.setItem("students", JSON.stringify(students));

    appendRowToTable(studentData);

    document.getElementById("studentForm").reset();
});

function appendRowToTable(student) {
    var newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.gender}</td>
        <td>${student.course}</td>
        <td>${student.email}</td>
    `;
    document.querySelector("#resultsTable tbody").appendChild(newRow);
}

function loadStoredData() {
    var students = JSON.parse(localStorage.getItem("students")) || [];
    students.forEach(appendRowToTable);
}

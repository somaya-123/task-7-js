const students = [];
const form = document.getElementById("studentForm");
const nameInput = document.getElementById("studentName");
const ageInput = document.getElementById("studentAge");
const courseInput = document.getElementById("studentCourse");
const gradeInput = document.getElementById("studentGrade");
const errorMsg = document.getElementById("error");
const studentsContainer = document.getElementById("studentsContainer");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    errorMsg.innerText = "";

    const name = nameInput.value;
    const age = ageInput.value;
    const course = courseInput.value;
    const gradeVal = gradeInput.value;

    if (name === "" || age ===  "" || course === "" || gradeVal === "") {
    errorMsg.innerText = "Please fill in all fields!";
    return;
}

const grade = Number(gradeVal);

if (grade < 0 || grade > 100) {
    errorMsg.innerText = "Grade must be between 0 and 100!";
    return;
}

const status = grade >= 50 ? "Passed" : "Failed";

const student = {
    name: name,
    age: age,
    course: course,
    grade: grade,
    status: status
};

students.push(student);

renderCard(student);

form.reset();
});

function renderCard(student) {
    const card = document.createElement("div");
    card.className = "card";

    const statusClass = student.status === "Passed" ? "passed" : "failed";

    card.innerHTML = `
        <p><strong>Student Name:</strong> ${student.name}</p>
        <p><strong>Age:</strong> ${student.age}</p>
        <p><strong>Course:</strong> ${student.course}</p>
        <p><strong>Grade:</strong> ${student.grade}</p>
        <p><strong>Status:</strong> <span class="${statusClass}">${student.status}</span>  </p>` ;

    studentsContainer.appendChild(card);
}

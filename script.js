const emojis = [
  "😀","😂","😍","😎","🤔","😢",
  "🎉","🚀","🌟","❤️","👍","👋",
  "🥳","🎂","🐶","🐱","🍕","🍣",
  "🏖️","🌈","🌍","✨","🔥","🦄",
  "🤖","💡","🎶","🏆","🚴‍♂️","💪",
  "🌻","🐶","🐱","🐭","🐹","🐰",
  "🦊","🐻","🐼","🐨","🐯","🦁",
  "🐮","🐷","🐸","🐵","🐔","🐧",
  "🐦","🐤","🦉","🐺","🦄","🐝",
  "🐞","🦋","🐢","🐍","🦓","🦒",
  "🐘","🦏","🐫","🦙","🐟","🐙",
  "🦐","🦀","🐚","👨‍⚕️","🤠","🧑‍🦰"
];

function getRandomEmoji() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
}

const student = ["Om", "Prakash", "Sai", "Abhi", "Ram"];

function loadStudent() {
  const studentContainer = document.getElementById("student-container");

  studentContainer.innerHTML = "";

  for (let i = 0; i < student.length; i++) {
    studentContainer.innerHTML += `<div class="student-card"> ${getRandomEmoji()} ${i + 1} ${student[i]} </div>`;
  }
}
loadStudent();

function addStudent() {
  const studentInput = document.getElementById("student-name");
  const studentName = studentInput.value.trim();

  if (studentName) {
    student.push(studentName);
    loadStudent();
    studentInput.value = "";
  } else {
    alert("Please enter a valid student name.");
  }
}

function removeStudent() {
  const studentInput = document.getElementById("student-name");
  const studentName = studentInput.value.trim();
  const index = student.indexOf(studentName);
  if (index !== -1) {
    student.splice(index, 1);
    loadStudent();
    studentInput.value = "";
  } else {
    alert("Student not found.");
  }
}
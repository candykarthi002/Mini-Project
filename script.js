const seats = document.querySelectorAll(".lab-seats");

seats.forEach((e, i) => {
  e.id = `seatno-${i + 1}`;
  e.innerText = i + 1;
  e.classList.toggle("not-selected-seat");
});

const students = document.querySelectorAll(".student-card");

students.forEach((e, i) => {
  let studentNo = `Student (113121UG03${(i + 1).toString().padStart(3, 0)})`;
  e.innerText = studentNo;
  e.id = `studentno-${i + 1}`;
  e.classList.toggle("not-selected-student");
});

seats.forEach((seat, i) => {
  seat.addEventListener("click", (e) => {
    e.target.classList.toggle("focused");
    e.target.classList.toggle("not-selected-seat");
    students[i].classList.toggle("focused");
    students[i].scrollIntoView();
  });
});

students.forEach((student, i) => {
  student.addEventListener("click", (e) => {
    // console.log(e.target);
    e.target.classList.toggle("focused");
    e.target.classList.toggle("not-selected-student");
    seats[i].classList.toggle("focused");
    seats[i].scrollIntoView();
  });
});

console.log(window.location);

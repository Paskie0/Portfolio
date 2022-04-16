function toggleForm() {
  var form = document.getElementById("addStudentForm");
  if (form.style.display === "none") {
    form.style.display = "block";
    document.getElementById("addStudentButton").innerHTML = "Confirm";
    document.getElementById("newStudentButtonCancel").style.display = "inline";
    document.getElementById("addStudentButton").blur();
  } else {
    form.style.display = "none";
    document.getElementById("addStudentButton").innerHTML = "Add Student";
    document.getElementById("addStudentButton").setAttribute("type", "submit");
    document.getElementById("newStudentButtonCancel").style.display = "none";
    location.reload();
  }
}

function hideForm() {
  var form = document.getElementById("addStudentForm");
  form.style.display = "none";
  document.getElementById("addStudentButton").innerHTML = "Add Student";
  document.getElementById("newStudentButtonCancel").style.display = "none";
  form.reset();
}

function reload() {
  location.reload();
}

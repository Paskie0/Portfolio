<?php
include_once 'connect.php'
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Admin Dashboard</title>
  <link rel="stylesheet" href="css/styles.css" />
</head>

<body>
  <br>
  <h1>Admin Dashboard</h1>
  <br>
  <div id="buttonsContainer">
    <button type="button" form="addStudentForm" onclick="toggleForm()" id="addStudentButton">Add Student</button>
    <button type="button" form="addStudentForm" onclick="hideForm()" style="display: none; background-color: #ef5144; color:#21262d" id="newStudentButtonCancel">Cancel</button>
  </div>
  <br />
  <div id="addStudenFormContainer">
    <form action="insertStudent.php" method="POST" target="addStudentRedirect" style="display: none;" id="addStudentForm">
      <div class="test">
        <label for="firstName">Voornaam</label>
        <br>
        <input type="text" id="firstName" name="firstName" />
      </div>
      <br>
      <div class="test">
        <label for="infix">Tussenvoegsel</label>
        <br>
        <input type="text" id="infix" name="infix" />
      </div>
      <br>
      <div class="test">
        <label for="lastName">Achternaam</label>
        <br>
        <input type="text" id="lastName" name="lastName" />
      </div>
    </form>
  </div>
  <br />
  <table>
    <tr>
      <th>Student nr.</th>
      <th>Voornaam</th>
      <th>Tussenvoegsel</th>
      <th>Achternaam</th>
      <th>Acties</th>
    </tr>
    <?php
    $fetchStudentInfo = "select * from students;";
    $queryFetchStudentInfo = $connect->query($fetchStudentInfo);
    while ($row = $queryFetchStudentInfo->fetch_assoc()) {
      echo "<tr class='noBottomBorder'>";
      echo "<td>" . $row["student_number"] . "</td>";
      echo "<td>" . $row["first_name"] . "</td>";
      echo "<td>" . $row["infix"] . "</td>";
      echo "<td>" . $row["last_name"] . "</td>";
      echo "<td>";
      echo "<button id='editButton'>Edit</button>";
      echo "<form action='deleteStudent.php?id=" . $row["student_number"] . "' method='POST' target='addStudentRedirect' onclick='reload()'>";
      echo "<button id='deleteButton' >Delete</button>";
      echo "</form></td></tr>";
    }
    ?>
  </table>
  <iframe name="addStudentRedirect" style="display: none"></iframe>
  <script src="js/javascript.js"></script>
</body>

</html>
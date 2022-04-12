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
  <script src="js/javascript.js"></script>
</head>

<body>
  <h1>Admin Dashboard</h1>
  <div id="buttonsContainer">
    <button type="button" form="addStudentForm" onclick="toggleForm()" id="addStudentButton">Add Student</button>
    <button type="button" form="addStudentForm" onclick="hideForm()" style="display: none; background-color: #21262d;" id="newStudentButtonCancel">❌</button>
  </div>
  <br />
  <div id="addStudenFormContainer">
    <form action="insertStudent.php" method="POST" target="addStudentRedirect" style="display: none;" id="addStudentForm">
      <label for="firstName">Voornaam</label><br />
      <input type="text" id="firstName" name="firstName" /><br />
      <label for="infix">Tussenvoegsel</label><br />
      <input type="text" id="infix" name="infix" /><br />
      <label for="lastName">Achternaam</label><br />
      <input type="text" id="lastName" name="lastName" />
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
      echo "<tr id='noBottomBorder'>";
      echo "<td>" . $row["student_number"] . "</td>";
      echo "<td>" . $row["first_name"] . "</td>";
      echo "<td>" . $row["infix"] . "</td>";
      echo "<td>" . $row["last_name"] . "</td>";
      echo "<td>";
      echo "<button id='editButton'>Edit</button>";
      echo "<form action='deleteStudent.php?id=" . $row["student_number"] . "' method='POST' target='addStudentRedirect' onclick='reload()'>";
      echo "<button id='deleteButton' onclick=''>Delete</button>";
      echo "</form></td></tr>";
    }
    ?>
  </table>
  <iframe name="addStudentRedirect" style="display: none"></iframe>
</body>

</html>
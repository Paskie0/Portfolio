<?php
include_once 'connect.php';

$student_number = $_GET['id'];

$deleteStudentInfo = "DELETE FROM students WHERE student_number = '$student_number'";
$resetAutoIncrement = "ALTER TABLE students AUTO_INCREMENT = 1";
$queryDeleteStudentInfo = $connect->query($deleteStudentInfo);
$queryResetAutoIncrement = $connect->query($resetAutoIncrement);

echo $_GET['id'];

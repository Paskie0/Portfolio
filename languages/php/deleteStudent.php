<?php
include_once 'connect.php';

$student_number = $_GET['id'];

$deleteStudentInfo = "DELETE FROM students WHERE student_number = '$student_number'";
$queryDeleteStudentInfo = $connect->query($deleteStudentInfo);

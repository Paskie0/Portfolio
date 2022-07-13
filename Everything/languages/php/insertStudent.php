<?php
include_once 'connect.php';

$firstName = $_POST["firstName"];
$infix = $_POST["infix"];
$lastName = $_POST["lastName"];

$insertStudentInfo = "INSERT INTO students (first_name, infix, last_name) VALUES ('$firstName', '$infix', '$lastName')";
$queryInsertStudentInfo = $connect->query($insertStudentInfo);

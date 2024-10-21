<?php 
require_once("connection.php");

$id = null;
$name =$_POST['name'];
$lastname =$_POST['lastname'];
$email =$_POST['email'];
$password =$_POST['password'];

$insertUser = "INSERT INTO users VALUES('','$name', '$lastname', '$email', '$password')";
$query = mysqli_query ($connect, $insertUser);

//redirecciona al index.php cuando se inserten los datos
if($query){
    Header("location: index.php");
}
?>
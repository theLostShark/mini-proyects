<?php 
require_once("connection.php");

$id = $_POST['id'];
$name =$_POST['name'];
$lastname =$_POST['lastname'];
$email =$_POST['email'];
$password =$_POST['password'];

$editUser = "UPDATE users SET name='$name', lastname='$lastname', email='$email', password='$password' WHERE id='$id' ";
$query = mysqli_query($connect, $editUser);

//redirecciona al index.php cuando se inserten los datos
if($query){
    Header("location: index.php");
}
?>
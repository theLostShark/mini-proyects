<?php 
require_once("connection.php");

$id = $_GET['id'];

$deleteUser = "DELETE FROM users WHERE id='$id' ";
$query = mysqli_query($connect, $deleteUser);

//redirecciona al index.php cuando se inserten los datos
if($query){
    Header("location: index.php");
}
?>
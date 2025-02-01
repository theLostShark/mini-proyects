<?php 
require_once "connection.php";

$id = $_GET['id'];

$delete = "DELETE FROM productos WHERE id='$id' ";
$query = mysqli_query($connect, $delete);

//redirecciona al index.php cuando se inserten los datos
if($query){
    Header("location: index.php");
}

?>
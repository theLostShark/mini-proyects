<?php 
require_once "connection.php";

$id = $_POST['id'];
$nombre =$_POST['nombre'];
$descripcion =$_POST['descripcion'];
$precio =$_POST['precio'];
$stock =$_POST['stock'];

$directorioSubida = "img/";
$max_file_size="5120000";
$extensionesValidas= array("jpg", "jpeg",  "png", "gif");
$foto = "";

if($_FILES['foto']['name'] !=""){
    $errores =0;
    $nombreArchivo= $_FILES['foto']['name'];
    $fileSize= $_FILES['foto']['size'];
    $directorioTemp= $_FILES['foto']['tmp_name'];
    $tipoArchivo= $_FILES['foto']['type'];
    $arrayArchivo= pathinfo($nombreArchivo);
   // var_dump($arrayArchivo);
    $extension=$arrayArchivo['extension'];

    if(!in_array($extension, $extensionesValidas)){
        echo "extension no valida";
        $errores=1;
    }
    if($fileSize > $max_file_size){
        echo "error, la imagen debe ser mas pequeña de 5MB";
        $errores=1;
    }
    if($errores==0){
        $nombreCompleto= $directorioSubida.$nombreArchivo;
        move_uploaded_file($directorioTemp, $nombreCompleto);
        $foto = $nombreCompleto;

    }
}

if($_FILES['foto']['name'] !=""){
    $editarProducto="UPDATE productos SET id='$id', descripcion='$descripcion',precio='$precio',stock='$stock',foto='$foto' WHERE id='$id'";
    $query = mysqli_query($connect, $editarProducto);
    Header("location: index.php");

}else{
    $editarProducto="UPDATE productos SET id='$id', descripcion='$descripcion',precio='$precio',stock='$stock' WHERE id='$id'";
    $query = mysqli_query($connect, $editarProducto);
    Header("location: index.php");
}





?>
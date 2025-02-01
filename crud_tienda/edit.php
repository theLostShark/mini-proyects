<?php 

require_once "header.php";
require_once "connection.php";

$id = $_GET['id'];
$sql = "SELECT * FROM productos WHERE id='$id'";
$query=mysqli_query($connect, $sql);
$row=mysqli_fetch_array($query);

?>


<div class="container my-5">
    <div class="row justify-content-md-center">
        <div class="col col-lg-2">
            <!--empty col-->
        </div>
        <div class="col-md-auto">
         
            <div class="card">
                <div class="card-header display-6"> Actualizar producto</div>
            </div>
            <div class="form-group">
                <form action="edited.php" method="post" class="p-4" enctype="multipart/form-data">
                <input type="hidden" name="id" value="<?= $row['id']?>">
                   Nombre: <input type="text" class="form-control" name="nombre"  required value="<?= $row['nombre']?>"><br>
                   Descripción: <input type="text" class="form-control" name="descripcion" value="<?= $row['descripcion']?>"><br>
                   Precio:  <input type="number" class="form-control" name="precio" required value="<?= $row['precio']?>"><br>
                    Stock: <input type="number" class="form-control" name="stock"  required value="<?= $row['stock']?>"><br>
                    Foto: <?php if (!empty($row['foto'])): ?>
                                <img src="<?= $row['foto'] ?>" alt="Producto" style="width: 100px; height: auto;">
                                <?php else: ?>
                                no photo
                                <?php endif; ?>
                    <input type="file" class="form-control" name="foto" value="<?= $row['foto']?>"><br>
                    <input type="submit" class="btn btn-dark" value="Actualizar"><br>
                </form>
                <br><br>
            </div>


        </div>
        <div class="col col-lg-2">
            <!--empty col-->
        </div>
    </div>
</div>


<?php require_once "footer.php"; ?>
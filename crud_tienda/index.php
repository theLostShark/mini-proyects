<?php 

require_once "header.php";
require_once "connection.php";

$sql = "SELECT * FROM productos";
$query = mysqli_query ($connect, $sql);

?>


<div class="container my-5">
    <div class="row justify-content-md-center">
        <div class="col col-lg-2">
            <!--empty col-->
        </div>
        <div class="col-md-auto">
            <div class="card">
                <div class="card-header display-6"> Lista de productos</div>
            </div>
            <div class="table-responsive">
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Precio</th>
                            <th>Stock</th>
                            <th>Foto</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php while($row = mysqli_fetch_array($query)): ?>
                        <tr>
                            <td><?= $row['id'] ?></td>
                            <td><?= $row['nombre'] ?></td>
                            <td><?= $row['descripcion'] ?></td>
                            <td><?= $row['precio'] ?></td>
                            <td><?= $row['stock'] ?></td>
                            <td><?php if (!empty($row['foto'])): ?>
                                <img src="<?= $row['foto'] ?>" alt="Producto" style="width: 100px; height: 100px; object-fit: cover">
                                <?php else: ?>
                                x
                                <?php endif; ?>
                            </td>
                            <td><a href="edit.php?id=<?= $row['id'] ?>"> <i class=" bi-pencil px-1"
                                    style="font-size:2rem; color:black;"></i></a></td>
                            <td><a href="delete.php?id=<?= $row['id'] ?>"><i class="bi-trash-fill px-1"
                                        style="font-size:2rem; color:red;"></i> </a>
                            </td>
                        </tr>
                        <?php endwhile; ?>
                    </tbody>
                </table>
            </div>

            <br><br>
            <div class="card">
                <div class="card-header display-6"> Añadir productos</div>
            </div>
            <div class="form-group">
                <form action="insert.php" method="post" class="p-4" enctype="multipart/form-data">

                    Nombre: <input type="text" class="form-control" name="nombre" required><br>
                    Descripción: <input type="text" class="form-control" name="descripcion"><br>
                    Precio: <input type="number" class="form-control" name="precio" required><br>
                    Stock: <input type="number" class="form-control" name="stock" required><br>
                    Foto: <input type="file" class="form-control" name="foto"><br>
                    <input type="submit" class="btn btn-dark" value="Añadir producto"><br>
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
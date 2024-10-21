<?php 
require_once("connection.php");

$id = $_GET['id'];
$sql="SELECT * FROM users WHERE id='$id' ";
$query = mysqli_query($connect, $sql);
$row = mysqli_fetch_array($query);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Edit user</title>
</head>

<body>
    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col col-lg-2">
                <!--empty col-->
            </div>
            <div class="col-md-auto">
                <!--center column-->
                <div class="form-group">
                    <h2>Edit User:</h2>
                    <form action="editing_user.php" method="post">
                        <input type="hidden" name="id" value="<?= $row['id']?>">
                        <input type="text" name="name" placeholder="Nombre" value="<?= $row['name']?>"><br>
                        <input type="text" name="lastname" placeholder="Apellidos" value="<?= $row['lastname']?>"><br>
                        <input type="text" name="email" placeholder="Email" value="<?= $row['email']?>"><br>
                        <input type="text" name="password" placeholder="Password" value="<?= $row['password']?>"><br>
                        <br><br>
                        <input type="submit" class="btn btn-dark" value="Update user info">
                    </form>
                </div>
            </div>
            <div class="col col-lg-2">
                <!--empty col-->
            </div>
        </div>
    </div>
</body>

</html>
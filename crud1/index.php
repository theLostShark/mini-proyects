<?php 
//llamada a base de datos
require_once("connection.php");

$sql = "SELECT * FROM users";
$query = mysqli_query ($connect, $sql);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>crud1 test</title>
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
                    <h2>User registration:</h2>
                    <form action="insert_user.php" method="post">
                        <input type="text" name="name" placeholder="Name"><br>
                        <input type="text" name="lastname" placeholder="Lastname"><br>
                        <input type="email" name="email" placeholder="email"><br>
                        <input type="password" name="password" placeholder="password"><br>
                        <br>
                        <input type="submit" class="btn btn-dark" value="Create new user"><br>
                    </form>
                    <br><br>
                </div>

                <div class="form-group">
                    <h2>Registered users:</h2>
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th>ID:</th>
                                <th>Name</th>
                                <th>Lastname</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php while($row = mysqli_fetch_array($query)): ?>
                            <tr>
                                <td><?= $row['id'] ?></td>
                                <td><?= $row['name'] ?></td>
                                <td><?= $row['lastname'] ?></td>
                                <td><?= $row['email'] ?></td>
                                <td><?= $row['password'] ?></td>
                                <td><a href="edit_user.php?id=<?= $row['id'] ?>" class="btn btn-warning">Edit</a></td>
                                <td><a href="delete_user.php?id=<?= $row['id'] ?>" class="btn btn-danger">Delete</a>
                                </td>
                            </tr>
                            <?php endwhile; ?>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col col-lg-2">
                <!--empty col-->
            </div>
        </div>
    </div>
</body>

</html>
<!-- Write a server-side script in PHP to illustrate inserting and retrieving data to and from
the database table. Create required connection using your own assumptions. Use
HTML form to insert and display data. -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Form</title>
</head>
<body>
<form action="index.php" method="post" style="display: flex; flex-direction: column; align-items: center;">
    <h1 style="text-align: center;">Student Form</h1><br>
    <table style="border: none;">
        <tr>
            <td><label for="name">Name: </label></td>
            <td><input type="text" required name="name"></td>
        </tr>
        <tr>
            <td><label for="email">Email: </label></td>
            <td><input type="email" required name="email"></td>
        </tr>
        <tr>
            <td><label for="password">Password: </label></td>
            <td><input type="password" required name="password"></td>
        </tr>
        <tr>
            <td><label for="date">Join Date: </label></td>
            <td><input type="date" required name="date"></td>
        </tr>
        <tr>
            <td><label for="checkbox">Do you agree to our term and conditions?: </label></td>
            <td><input type="checkbox" required name="checkbox"></td>
        </tr>
        <tr>
            <td><label for="register">Register: </label></td>
            <td><input type="submit" required name="register"></td>
        </tr>
    </table>
</form>

    
</body>
</html>

<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $db_name = "db_interaction";

    $conn = new mysqli($servername, $username, $password, $db_name);
    if ($conn -> connect_error){
        die("Connection failed. Error message: ". $conn->connect_error);
    }

    if ($_SERVER['REQUEST_METHOD'] == "POST"){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $date = $_POST['date'];
        // $checkbox = $_POST['checkbox'];
        // $register = $_POST['register'];

        $sql = "INSERT INTO 
            students (name, email, password, date) 
            VALUES ('$name', '$email', '$password', '$date')";

        if ($conn -> query($sql) == TRUE){
            echo '<script> alert("New record added sucessfully.")</script>';
        }
        else {
            echo '<script> alert("Database insertion error. Error message: ". $conn->error)</script>';
        }
    }
    $conn->close();
?>





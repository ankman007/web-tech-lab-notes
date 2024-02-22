<?php
session_start();

include_once 'db_conn.php';

if ($_SERVER["REQUEST_METHOD"] == "POST"){
    
    $login_sucessful = process_logic($_POST['name'], $_POST['email'], $_POST['password']);
    
    if ($login_sucessful) {
        dashboard_redirect();
    }
    else{
        include 'index.php';
    }

}
else{
    include 'index.php';
}

function process_logic($name, $email, $password){
    $_SESSION['name'] = $name;
    $_SESSION['email'] = $email;
    $_SESSION['password'] = $password;
    return true;
}
function dashboard_redirect(){
    header("Location: user_dashboard.php");
    exit();
}
?>
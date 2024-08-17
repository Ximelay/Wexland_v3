<?php
/**
 * Файл делает простой вход на сайт
 *
 * PHP version 8.3
 * 
 * @category MyTestPhp
 * @package  Php_Test
 * @author   Ximelay  <ximelay@gmail.com>
 * @license  http://opensource.org/licenses/MIT MIT vLicense
 * @version  GIT: <git_id>
 * @link     http://example.com
 */
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "user_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            echo "Login successful!";
            // Здесь можно перенаправить 
            // пользователя на защищенную страницу
            header("Location: index.html"); 
        } else {
            echo "Invalid password!";
        }
    } else {
        echo "No user found with this email!";
    }
}

$conn->close();
?>
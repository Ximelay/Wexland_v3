<?php
/**
 * Файл регистрирует пользователя на сайте
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

// Создание соединения
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверка соединения
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    // Хэшируем пароль
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT); 

    // Проверка уникальности email
    $checkEmail = "SELECT * FROM users WHERE email='$email'";
    $result = $conn->query($checkEmail);

    if ($result->num_rows > 0) {
        echo "This email is already registered!";
    } else {
        // Добавление пользователя в базу данных
        $sql = "INSERT INTO users (name, email, password) VALUES
        ('$name', '$email', '$password')";

        if ($conn->query($sql) === true) {
            // Перенаправление на страницу входа
            header("Location: sign.html"); 
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
}

$conn->close();
?>
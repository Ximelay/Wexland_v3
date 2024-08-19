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

// Настройки подключения к базе данных
$host = 'localhost'; // Адрес сервера базы данных
$db   = 'user_db'; // Имя базы данных
$user = 'root'; // Имя пользователя базы данных
$pass = '';
// Пароль пользователя базы данных (если есть)

// Создание подключения
$conn = new mysqli($host, $user, $pass, $db);

// Проверка подключения
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

?>
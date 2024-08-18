document.addEventListener('DOMContentLoaded', function () {
    var contactsButton = document.getElementById('contactsButton');
    var contactsDropdown = document.getElementById('contactsDropdown');
    var dropdownItems = document.querySelectorAll('#contactsDropdown a');

    // Открытие/закрытие меню при клике на кнопку "Контакты"
    contactsButton.addEventListener('click', function (event) {
        event.stopPropagation(); // Останавливаем всплытие события, чтобы не закрывать меню сразу
        contactsDropdown.classList.toggle('hidden');
    });

    // Закрытие меню при клике на один из элементов
    dropdownItems.forEach(function (item) {
        item.addEventListener('click', function () {
            contactsDropdown.classList.add('hidden');
        });
    });

    // Закрытие меню при клике вне его области
    document.addEventListener('click', function (event) {
        if (
            !contactsDropdown.contains(event.target) &&
            !contactsButton.contains(event.target)
        ) {
            contactsDropdown.classList.add('hidden');
        }
    });

    // Закрытие меню при скролле
    window.addEventListener('scroll', function () {
        contactsDropdown.classList.add('hidden');
    });
});
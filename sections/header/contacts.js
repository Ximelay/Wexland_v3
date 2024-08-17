// contacts.js

// Инициализация меню контактов
function initializeContactsDropdown() {
	document
		.getElementById('contactsButton')
		.addEventListener('click', function () {
			const dropdown = document.getElementById('contactsDropdown')
			dropdown.classList.toggle('hidden')
		})

	document.addEventListener('click', function (event) {
		const contactsDropdown = document.getElementById('contactsDropdown')
		const contactsButton = document.getElementById('contactsButton')

		if (
			!contactsButton.contains(event.target) &&
			!contactsDropdown.contains(event.target)
		) {
			contactsDropdown.classList.add('hidden')
		}
	})

	window.addEventListener('scroll', function () {
		const contactsDropdown = document.getElementById('contactsDropdown')
		contactsDropdown.classList.add('hidden')
	})
}

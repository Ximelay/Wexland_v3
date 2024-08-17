document
	.getElementById('contactsButton')
	.addEventListener('click', function () {
		var dropdown = document.getElementById('contactsDropdown')
		dropdown.classList.toggle('hidden')
	})

// Close dropdowns when clicking outside
document.addEventListener('click', function (event) {
  var contactsDropdown = document.getElementById('contactsDropdown')
  var contactsButton = document.getElementById('contactsButton')

  if (!contactsButton.contains(event.target) && !contactsDropdown.contains(event.target)) {
    contactsDropdown.classList.add('hidden')
  }
})

// Close dropdowns on scroll
window.addEventListener('scroll', function () {
  var contactsDropdown = document.getElementById('contactsDropdown')

  contactsDropdown.classList.add('hidden')
})

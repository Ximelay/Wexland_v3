const playButton = document.getElementById('play')
const modal = document.getElementById('modal')
const closeModalButton = document.getElementById('closeModal')

// Функция для открытия модального окна с плавным эффектом
function openModal() {
	modal.style.visibility = 'visible'
	modal.style.opacity = '1'
	modal.style.transform = 'scale(1)'
}

// Функция для закрытия модального окна с плавным эффектом
function closeModal() {
	modal.style.opacity = '0'
	modal.style.transform = 'scale(0.9)'

	// Делаем окно невидимым после завершения анимации
	setTimeout(() => {
		modal.style.visibility = 'hidden'
	}, 300) // Время должно совпадать с transition
}

playButton.addEventListener('click', openModal)
closeModalButton.addEventListener('click', closeModal)

// Закрытие при клике вне модального окна
window.addEventListener('click', e => {
	if (e.target === modal) {
		closeModal()
	}
})

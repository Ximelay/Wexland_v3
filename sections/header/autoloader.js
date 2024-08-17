// autoloader.js
document.addEventListener('DOMContentLoaded', function () {
	fetch('/Wexland_v3/sections/header/header.html')
		.then(response => response.text())
		.then(data => {
			document.getElementById('header-container').innerHTML = data

			// Инициализация языкового и контактного функционала
			initializeLanguageDropdown()
			initializeContactsDropdown()

			// Теперь элементы перевода должны быть определены после загрузки header
			// Определяем их повторно после вставки хедера
			commonElementsToTranslate.news = document.getElementById('news')
			commonElementsToTranslate.rules = document.getElementById('rules')
			commonElementsToTranslate.worldMap = document.getElementById('worldMap')
			commonElementsToTranslate.ides = document.getElementById('ides')
			commonElementsToTranslate.languageButton = document.getElementById('languageButton')
			commonElementsToTranslate.rus = document.getElementById('rus')
			commonElementsToTranslate.eng = document.getElementById('eng')
			commonElementsToTranslate.contactsButton = document.getElementById('contactsButton')
			commonElementsToTranslate.sign = document.getElementById('sign')

			// Применяем сохраненный язык сразу после загрузки хедера и контента
			const savedLanguage = localStorage.getItem('language') || 'ru' // По умолчанию русский

			// Применяем перевод для общих элементов
			applyLanguage(savedLanguage)

			// Применяем перевод для уникальных элементов страницы
			applyPageSpecificTranslations(savedLanguage)
		})
		.catch(error => console.error('Error loading header:', error))
})

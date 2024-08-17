// lang.js

// Объект с переводами для общих элементов
const translations_common = {
	en: {
		news: 'News',
		rules: 'Rules',
		worldMap: 'World Map',
		ides: 'Suggestions & Ideas',
		languageButton: 'Language',
		rus: 'Russian',
		eng: 'English',
		contactsButton: 'Contacts',
		sign: 'Sign In',
	},
	ru: {
		news: 'Новости',
		rules: 'Правила',
		worldMap: 'Карта мира',
		ides: 'Предложения и идеи',
		languageButton: 'Язык',
		rus: 'Русский',
		eng: 'Английский',
		contactsButton: 'Контакты',
		sign: 'Вход',
	},
}

// Элементы, которые нужно перевести
let commonElementsToTranslate = {
	news: null,
	rules: null,
	worldMap: null,
	ides: null,
	languageButton: null,
	rus: null,
	eng: null,
	contactsButton: null,
	sign: null,
}

// Применение перевода для общих элементов
function applyLanguage(language) {
	if (translations_common[language]) {
		Object.keys(commonElementsToTranslate).forEach(key => {
			if (commonElementsToTranslate[key]) {
				commonElementsToTranslate[key].textContent =
					translations_common[language][key]
			}
		})
	}
}

// Инициализация языкового меню
function initializeLanguageDropdown() {
	document
		.getElementById('languageButton')
		.addEventListener('click', function () {
			const dropdown = document.getElementById('languageDropdown')
			dropdown.classList.toggle('hidden')
		})

	document.querySelectorAll('#languageDropdown a').forEach(link => {
		link.addEventListener('click', function (event) {
			event.preventDefault() // Предотвращаем переход по ссылке
			const selectedLanguage = link.getAttribute('data-lang')
			localStorage.setItem('language', selectedLanguage) // Сохраняем выбранный язык
			applyLanguage(selectedLanguage) // Применяем перевод
			applyPageSpecificTranslations(selectedLanguage) // Применяем уникальные переводы для страницы
		})
	})

	document.addEventListener('click', function (event) {
		const languageDropdown = document.getElementById('languageDropdown')
		const languageButton = document.getElementById('languageButton')

		if (
			!languageButton.contains(event.target) &&
			!languageDropdown.contains(event.target)
		) {
			languageDropdown.classList.add('hidden')
		}
	})

	window.addEventListener('scroll', function () {
		const languageDropdown = document.getElementById('languageDropdown')
		languageDropdown.classList.add('hidden')
	})
}

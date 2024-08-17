// loadheder.js
document.addEventListener('DOMContentLoaded', function () {
	fetch('/Wexland_v3/sections/header/header.html')
		.then(response => response.text())
		.then(data => {
			document.getElementById('header-container').innerHTML = data

			// Инициализация после загрузки хедера
			initializeDropdowns_lang()
			initializeDropdowns_cont()

			// Применяем сохраненный язык сразу после загрузки
			const savedLanguage = localStorage.getItem('language') || 'ru' // По умолчанию русский
			applyLanguage(savedLanguage)
		})
		.catch(error => console.error('Error loading header:', error))
})

function initializeDropdowns_lang() {
	// Переводы текста
	const translations_lore = {
		en: {
			news: 'News',
			rules: 'Rules',
			worldMap: 'World Map',
			ides: 'Suggestions & Ideas',
			languageButton: 'Language',
			rus: 'Russian',
			eng: 'English',
			contactsButton: 'Contacts',
			pageTitle: 'Lore Section',
			pageContent: "Here you will find your character's lore.",
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
			pageTitle: 'Лор персонажа',
			pageContent: 'Здесь вы найдете лор своего персонажа.',
			sign: 'Вход',
		},
	}

	// Элементы, которые нужно перевести
	const elementsToTranslate = {
		news: document.getElementById('news'),
		rules: document.getElementById('rules'),
		worldMap: document.getElementById('worldMap'),
		ides: document.getElementById('ides'),
		languageButton: document.getElementById('languageButton'),
		rus: document.getElementById('rus'),
		eng: document.getElementById('eng'),
		contactsButton: document.getElementById('contactsButton'),
		pageTitle: document.getElementById('pageTitle'),
		pageContent: document.getElementById('pageContent'),
		sign: document.getElementById('sign'),
	}

	// Применение перевода на основе выбранного языка
	function applyLanguage(language) {
		if (translations_lore[language]) {
			Object.keys(elementsToTranslate).forEach(key => {
				if (elementsToTranslate[key]) {
					elementsToTranslate[key].textContent =
						translations_lore[language][key]
				}
			})
		}
	}

	// Применяем сохраненный язык при загрузке страницы
	const savedLanguage = localStorage.getItem('language') || 'ru' // По умолчанию русский
	applyLanguage(savedLanguage)

	// Toggle language dropdown
	document
		.getElementById('languageButton')
		.addEventListener('click', function () {
			const dropdown = document.getElementById('languageDropdown')
			dropdown.classList.toggle('hidden')
		})

	// Обработка выбора языка и сохранение его в localStorage
	document.querySelectorAll('#languageDropdown a').forEach(link => {
		link.addEventListener('click', function (event) {
			event.preventDefault() // Предотвращаем переход по ссылке
			const selectedLanguage = link.getAttribute('data-lang')
			localStorage.setItem('language', selectedLanguage) // Сохраняем выбранный язык
			applyLanguage(selectedLanguage) // Применяем перевод
		})
	})

	// Закрытие выпадающих меню при клике вне их (language)
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

	// Закрытие выпадающих меню при прокрутке (language)
	window.addEventListener('scroll', function () {
		const languageDropdown = document.getElementById('languageDropdown')
		languageDropdown.classList.add('hidden')
	})
}

function initializeDropdowns_cont() {
	document
		.getElementById('contactsButton')
		.addEventListener('click', function () {
			const dropdown = document.getElementById('contactsDropdown')
			dropdown.classList.toggle('hidden')
		})

	// Закрытие выпадающих меню при клике вне их (contacts)
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

	// Закрытие выпадающих меню при прокрутке (contacts)
	window.addEventListener('scroll', function () {
		const contactsDropdown = document.getElementById('contactsDropdown')
		contactsDropdown.classList.add('hidden')
	})
}

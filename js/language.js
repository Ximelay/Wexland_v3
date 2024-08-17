// Переводы текста
const translations = {
	en: {
		news: 'News',
		rules: 'Rules',
		worldMap: 'World Map',
		ides: 'Suggestions & Ideas',
		languageButton: 'Language',
		rus: 'Russian',
		eng: 'English',
		contactsButton: 'Contacts',
		osnova_z: 'Unique Project',
		osnova:
			'We present to you a unique Minecraft server project! Play and develop with friends on exciting modpacks. On the server, you will find beautiful builds, friendly players, and, of course, experienced moderation. Join and play!',
		play: 'Start Playing',
		server_info_title: 'Server information',
		server_info_text:
			'Here will be a description of the server, for now its a stub',

		sect: 'SECTIONS',
		lor: 'Lore',
		items: 'Items',
		proj: 'About the Project',
		pers: 'Characters',
		conf: 'Conflict',
		dev: 'About the Developers',
		npc: 'NPCs',
		faq: 'FAQ',
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
		osnova_z: 'Уникальный проект',
		osnova:
			'Представляем вам уникальный в своём роде проект игрового сервера Minecraft! Играй и развивайся вместе с друзьями на интереснейших сборках. На сервере вас ждут красивые постройки, приятные игроки и конечно же опытная модерация, заходи и играй!',
		play: 'Начать играть',
		server_info_title: 'Информация о сервере',
		server_info_text: 'Здесь будет описание сервера, пока заглушка',

		sect: 'РАЗДЕЛЫ',
		lor: 'Лор',
		items: 'Предметы',
		proj: 'О проекте',
		pers: 'Персонажи',
		conf: 'Противостояние',
		dev: 'О разработчиках проекта',
		npc: 'НПС',
		faq: 'FAQ',
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
	osnova_z: document.getElementById('osnova_z'),
	osnova: document.getElementById('osnova'),
	play: document.getElementById('play'),
	server_info_title: document.getElementById('server_info_title'),
	server_info_text: document.getElementById('server_info_text'),

	sect: document.getElementById('sect'),
	lor: document.getElementById('lor'),
	items: document.getElementById('items'),
	proj: document.getElementById('proj'),
	pers: document.getElementById('pers'),
	conf: document.getElementById('conf'),
	dev: document.getElementById('dev'),
	npc: document.getElementById('npc'),
	faq: document.getElementById('faq'),
	sign: document.getElementById('sign'),
}

// Применение перевода на основе выбранного языка
function applyLanguage(language) {
	if (translations[language]) {
		Object.keys(elementsToTranslate).forEach(key => {
			if (elementsToTranslate[key]) {
				elementsToTranslate[key].textContent = translations[language][key]
			}
		})
	}
}

// Применяем сохраненный язык при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
	const savedLanguage = localStorage.getItem('language') || 'ru' // По умолчанию русский
	applyLanguage(savedLanguage)
})

// Toggle language dropdown
document
	.getElementById('languageButton')
	.addEventListener('click', function () {
		var dropdown = document.getElementById('languageDropdown')
		dropdown.classList.toggle('hidden')
	})

// Обработка выбора языка и сохранение его в localStorage
document.querySelectorAll('#languageDropdown a').forEach(link => {
	link.addEventListener('click', function (event) {
		event.preventDefault() // Предотвращаем переход по ссылке
		var selectedLanguage = link.getAttribute('data-lang')
		localStorage.setItem('language', selectedLanguage) // Сохраняем выбранный язык
		applyLanguage(selectedLanguage) // Применяем перевод
	})
})

// Закрытие выпадающих меню при клике вне их
document.addEventListener('click', function (event) {
	var languageDropdown = document.getElementById('languageDropdown')
	var languageButton = document.getElementById('languageButton')

	if (!languageButton.contains(event.target) && !languageDropdown.contains(event.target)) {
		languageDropdown.classList.add('hidden')
	}
})

// Закрытие выпадающих меню при прокрутке
window.addEventListener('scroll', function () {
	var languageDropdown = document.getElementById('languageDropdown')
	languageDropdown.classList.add('hidden')
})

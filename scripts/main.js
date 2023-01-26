// Location
const header = document.querySelector('.header')
const currentLocation = header.querySelector('.header__location-wrap')
const city = currentLocation.querySelector('.header__location-city')
const arrow = currentLocation.querySelector('.header__location-arrow')
const citiesContainer = header.querySelector('.header__location-list')
const listOfCities = citiesContainer.querySelectorAll('li')

currentLocation.addEventListener('click', locationListVisibility)
listOfCities.forEach(item => {
	item.addEventListener('click', () => {
		setNewCity(item)
	})
})

function setNewCity(item) {
	city.innerText = item.dataset.city
	listOfCities.forEach(item => {
		item.classList.remove('selected')
	})
	item.classList.add('selected')
	locationListVisibility()
}

function locationListVisibility() {
	citiesContainer.classList.toggle('hidden')
	arrow.classList.toggle('rotate')
}

// Mobile Menu
const burger = document.querySelector('.header__burger')
const mobMenu = document.querySelector('.mobile-menu')
const currentMobLocation = mobMenu.querySelector('.header__location-wrap')
const currentLocationContainer = header.querySelector('.header__location')

// Mobile Menu
burger.addEventListener('click', () => {
	burger.classList.toggle('active')
	burger.classList.toggle('not-active')

	currentLocationContainer.classList.toggle('visible')
	mobMenuVisibility()
})

function mobMenuVisibility() {
	mobMenu.classList.toggle('active')
	mobMenu.classList.toggle('not-active')

	if (mobMenu.classList.contains('active')) {
		document.querySelector('.mobile-menu.active').style.zIndex = 2
	} else {
		setTimeout(() => {
			document.querySelector('.mobile-menu.not-active').style.zIndex = -1
		}, 400)
	}
}

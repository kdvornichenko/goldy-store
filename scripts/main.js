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
const burgerHeart = window.getComputedStyle(burger, ':after')
const toolsFavorite = mobMenu.querySelector(
	'.mobile-menu__sidebar-tools_favorite'
)

burger.addEventListener('click', () => {
	burger.classList.toggle('active')
	burger.classList.toggle('not-active')

	currentLocationContainer.classList.toggle('visible')
	document.body.classList.toggle('overflow-hidden')

	mobMenuVisibility()

	burger.style.setProperty(
		'--top',
		`${toolsFavorite.getBoundingClientRect().top - 31}px`
	)
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

// Slider
const slider = document.querySelector('.slider')
const slideWrap = slider.querySelector('.slide__wrap')
const arrowPrev = slider.querySelector('.slider__control-arrow_prev')
const arrowNext = slider.querySelector('.slider__control-arrow_next')
const dots = slider.querySelectorAll('.slider__control-dots span')

let slide = slider.querySelector('.slide.active')
let slideWidth = 0

arrowNext.addEventListener('click', nextSlide)
arrowPrev.addEventListener('click', prevSlide)

function setSlide() {
	slideWrap.style.transform = `translate3d(${slideWidth}px, 0, 0.1px)`
}

function toggleSldeClass() {
	setSlide()
	slide.classList.remove('active')
	slide = slider.querySelector('.slide.active')
}

function nextSlide() {
	if (slide.nextElementSibling) {
		slideWidth = slideWidth + -slide.offsetWidth
		slide.nextElementSibling.classList.add('active')
		toggleSldeClass()
		setDot()
	}
}

function prevSlide() {
	if (slide.previousElementSibling) {
		slideWidth = slideWidth + slide.offsetWidth
		slide.previousElementSibling.classList.add('active')
		toggleSldeClass()
		setDot()
	}
}

function setDot() {
	for (let i = 0; i < slideWrap.children.length; i++) {
		console.log(slideWrap.children[i])
		if (slideWrap.children[i].classList.contains('active')) {
			dots.forEach(item => {
				item.classList.remove('active')
			})
			dots[i].classList.add('active')
		}
	}
}

setSlide()

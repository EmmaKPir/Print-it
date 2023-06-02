// Tableau des images et sous-titre
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// variable pour le diaporama
const arrowLeft = document.querySelector (".arrow_left")
const arrowRight = document.querySelector (".arrow_right")
const imageBanner = document.querySelector(".banner-img")
const subtitle = document.querySelector("#banner > p")
const containerDots = document.querySelector(".dots")
let counter = 0


//création des dots dans la page HTML en fonction du nombre de page
for (let i = 0; i < slides.length; i += 1) {
	const dot = document.createElement ("div")
	dot.className = "dot"
	dots.appendChild ("dot_selected")
}

const dots = document.querySelectorAll("dot")
containerDots [0].classList.add("dot_selected")

// on géré le défilement avec la flèche gauche
	arrowLeft.addEventListener("click", ()=> {
		const newCounter = (counter === 0) ? (slides.length - 1) : (counter - 1)
		updateCarrouselUI(counter, newCounter)
	})

// on géré le défilement avec la flèche droite
	arrowRight.addEventListener("click", ()=> {
		const newCounter = (counter < slides.length - 1) ? (counter + 1) : 0
	})

// on gère le défilement des slides avec une fonction de compteur
function updateCarrouselUI (oldCounter, newCounter) {
	counter = newCounter;
	dots[oldCounter].classList.remove('dot_selected');
	imageBanner.src = "./assets/images/slideshow/" + slides[newCounter].image;
	text.innerHTML = slides[newCounter].tagLine;
	dots[newCounter].classList.add('dot_selected');
}
// variable pour le diaporama
let compteur = 0

// Tableau des images
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



// on géré le défilement avec la flèche gauche
	let arrowLeft = document.querySelector (".arrow_left")
	arrowLeft.addEventListener ("click", () => {
		console.log ("Vous avez cliquez sur la flèche gauche")
	})

	function slideNext () {
		compteur++

	}

// on géré le défilement avec la flèche droite
	let arrowRight = document.querySelector (".arrow_right")
	arrowLeft.addEventListener ("click", () => {
		console.log ("Vous avez cliquez sur la flèche droite")
	})
// Tableau des images et sous-titre
const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// variable pour le diaporama
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector (".arrow_left");
const imageBanner = document.querySelector(".banner-img");
const subtitle = document.querySelector("#banner p");
const dots = document.querySelector(".dots");
let slidesIndex = 0;

//création des dots dans la page HTML en fonction du nombre de page
for (let i = 0; i < slides.length; i++) {
	dots.innerHTML = dots.innerHTML + "<div class='dot'></div>";
}

let dot = document.querySelectorAll(".dot");

// on géré le défilement flèche droite
arrowRight.addEventListener("click", () => {
	dot[slidesIndex].classList.remove("dot_selected");
	slidesIndex++;
	if (slidesIndex === slides.length) {
	  slidesIndex = 0;
	}
	imageBanner.src = "./assets/images/slideshow/" + slides[slidesIndex].image;
	subtitle.innerHTML = slides[slidesIndex].tagLine;
	dot[slidesIndex].classList.add("dot_selected");
  });

  // on géré le défilement flèche gauche
arrowLeft.addEventListener("click", () => {
	dot[slidesIndex].classList.remove("dot_selected");
	slidesIndex--;
	if (slidesIndex === -1) {
	  slidesIndex = slides.length - 1;
	}
	imageBanner.src = "./assets/images/slideshow/" + slides[slidesIndex].image;
	subtitle.innerHTML = slides[slidesIndex].tagLine;
	dot[slidesIndex].classList.add("dot_selected");
  });

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

// déclaration des variables pour le diaporama
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
const imageBanner = document.querySelector(".banner-img");
const subtitle = document.querySelector("#banner p");
const dots = document.querySelector(".dots");
let slidesIndex = 0;

//création des dots dans la page HTML en fonction du nombre de page
const fragment = document.createDocumentFragment()
for (let i = 0; i < slides.length; i++) {
	const dot = document.createElement("div")
	dot.classList.add("dot")
	fragment.appendChild(dot)
	if (i === 0){
		dot.classList.add("dot_selected")
	}
}
dots.appendChild(fragment);

const dot = document.querySelectorAll(".dot");

const arrows = document.querySelectorAll(".arrow");

for (const arrow of arrows) {
	arrow.addEventListener("click", (e) => {
		const clickedArrow = e.target
		const selectedSide = clickedArrow.dataset.side
		dot[slidesIndex].classList.remove("dot_selected");
		if (selectedSide == "left") {
			slidesIndex--;
			if (slidesIndex === -1) {
				slidesIndex = slides.length - 1;
			}
		} else {
			slidesIndex++;
			if (slidesIndex === slides.length) {
				slidesIndex = 0;
			}
		}
		imageBanner.src = "./assets/images/slideshow/" + slides[slidesIndex].image;
		subtitle.innerHTML = slides[slidesIndex].tagLine;
		dot[slidesIndex].classList.add("dot_selected");
	})
}

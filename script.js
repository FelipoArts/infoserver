// Inicialização do Glide.js
const myCarousel = new Glide('.glide', {
    type: 'carousel',
    autoplay: 2000,
    
    perView: 7,

    focusAt: 'center',
    gap: 20,
    hoverpause: true,
    animationDuration: 400,
    breakpoints: {
        1024: {
            perView: 5
        },
        768: {
            perView: 3
        },
        480: {
            perView: 2
        }
    }
}).mount(); // Monta e inicializa o carrossel


// Adicionar o controle de scroll (permanece o mesmo)
const carouselWrapper = document.querySelector('.carousel-wrapper');

carouselWrapper.addEventListener('wheel', (event) => {
    if (carouselWrapper.contains(event.target)) {
        event.preventDefault();
        if (event.deltaY > 0) {
            myCarousel.go('>');
        } else {
            myCarousel.go('<');
        }
    }
}, { passive: false });

document.addEventListener("DOMContentLoaded", () => {
	const slides = document.querySelectorAll(".glide__slide");

	slides.forEach((slide) => {
		slide.style.transformStyle = "preserve-3d"; // garante o efeito 3D
		slide.style.transition = "transform 0.3s ease";

		const img = slide.querySelector("img");
		const text = slide.querySelector("p");

		// Adiciona transição suave nas camadas internas
		if (img) img.style.transition = "transform 0.3s ease";
		if (text) text.style.transition = "transform 0.3s ease";

		slide.addEventListener("mousemove", (e) => {
			const rect = slide.getBoundingClientRect();
			const x = (e.clientX - rect.left) / rect.width;
			const y = (e.clientY - rect.top) / rect.height;

			// Inclinação do card
			const xDeg = (y - 0.5) * 8;
			const yDeg = (x - 0.5) * -8;
			slide.style.transform = `perspective(1000px) rotateX(${xDeg}deg) rotateY(${yDeg}deg)`;

			// Movimento das "camadas internas"
			if (img) {
				const offsetX = (x - 0.5) * 20;
				const offsetY = (y - 0.5) * 20;
				img.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 30px)`;
			}

			if (text) {
				const offsetX = (x - 0.5) * 10;
				const offsetY = (y - 0.5) * 10;
				text.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 15px)`;
			}
		});

		slide.addEventListener("mouseleave", () => {
			slide.style.transform = "";
			if (img) img.style.transform = "";
			if (text) text.style.transform = "";
		});
	});
});
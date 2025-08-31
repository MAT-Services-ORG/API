document.addEventListener("DOMContentLoaded", () => {
    const carouBlocs = document.querySelectorAll('carou');

    setInterval(
      () => {
        carouBlocs.forEach((el) => {
            const prevButton = document.querySelector("#carousel .prev");
            const nextButton = document.querySelector("#carousel .next");
            const carouselInner = document.querySelector("#carousel .carousel-inner");
            const items = document.querySelectorAll("#carousel .carousel-item");
            let currentIndex = 0;

            if (!prevButton || !nextButton || !carouselInner || items.length === 0) return;

            nextButton.addEventListener("click", () => {
                currentIndex = (currentIndex + 1) % items.length;
                updateCarousel()
            });

            prevButton.addEventListener("click", () => {
                currentIndex = (currentIndex - 1 + items.length) % items.length;
                updateCarousel();
            });

            function updateCarousel() {
                const offset = -currentIndex * 100;
                carouselInner.style.transform = `translateX(${offset}%)`;
            }
            const totalItems = items.length;                            function showSlide(index) {
                  carouselInner.style.transform = `translateX(-${index * 100}%)`;
                  items.forEach((item, i) => {
                    item.classList.toggle('active', i === index);
                  });
            }
              
            function nextSlide() {
                  currentIndex = (currentIndex + 1) % totalItems;
                  showSlide(currentIndex);
            }/*
                      function prevSlide() {
                      currentIndex = (currentIndex - 1 + totalItems) % totalItems;
                      showSlide(currentIndex);
            }*/
            // Auto défilement toutes les 4 secondes
            let autoSlide = setInterval(nextSlide, 7000);
            function resetAutoSlide() {
                  clearInterval(autoSlide);
                  autoSlide = setInterval(nextSlide, 7000);
            } 
        }
    );
}, 500);
});
const style = document.createElement('style');
style.textContent = `
.carou {
  display: flex;
  justify-content: center;
}

carou .main {
  position: relative;
  width: 100%;
  /*max-width: 600px;*/
  overflow: hidden;
  max-height: calc(100vh - 80px);
}

carou .inner {
  display: flex;
  transition: transform 0.5s ease-in-out;
  /*width: 100%;*/
}

carou .item {
  min-width: 100%;
  width: calc(100% - 10px); 
  height: calc(100vh - 80px); 
  background-size: cover; 
  background-position: center;
  border-radius: 10px;
  text-align: left;
  background-color: black;
  color:white;
}

carou button.prev,
carou button.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  padding: 10px;
  cursor: pointer;
}

carou button.prev {
  left: 10px;
}

carou button.next {
  right: 10px;
}
carou .content {
  padding: 20px;
}
`;
document.head.appendChild(style);
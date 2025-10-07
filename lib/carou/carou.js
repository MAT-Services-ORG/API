function Carou(CarouID, action, arg) { 
  let selectedCarou = document.getElementById(CarouID);
  if (!selectedCarou) {
    console.error("CarouBuilder: Carousel ID is missing or incorrect.");
    return;
  }

  if (!selectedCarou.CarouNumber) selectedCarou.CarouNumber = 0;

  if (action === "Build") {
    selectedCarou.innerHTML = `<main class="carousel-main">
        <div class="carousel">
            <div class="carousel-inner"></div>
            <button class="prev">‹-</button>
            <button class="next">-›</button>
        </div>
    </main>`;

    const prevButton = selectedCarou.querySelector(".prev");
    const nextButton = selectedCarou.querySelector(".next");
    const carouselInner = selectedCarou.querySelector(".carousel-inner");
    let currentIndex = 0;

    function updateCarousel() {
      const items = carouselInner.querySelectorAll(".carousel-item");
      if (items.length === 0) return;
      items.forEach((item, i) => {
        item.classList.toggle('active', i === currentIndex);
      });
      carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextButton.addEventListener("click", () => {
      const items = carouselInner.querySelectorAll(".carousel-item");
      if (items.length === 0) return;
      currentIndex = (currentIndex + 1) % items.length;
      updateCarousel();
    });

    prevButton.addEventListener("click", () => {
      const items = carouselInner.querySelectorAll(".carousel-item");
      if (items.length === 0) return;
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      updateCarousel();
    });
  }

  if (action === "BuildDelfauts") {
    function CarouDelfautBuilderStyles() {
      let CarouDelfautStyle = document.createElement('style');
      CarouDelfautStyle.innerHTML = `
        .carousel-main {
          display: flex;
          justify-content: center;
        }
        .carousel {
          position: relative;
          width: 100%;
          overflow: hidden;
          max-height: calc(100vh - 80px);
        }
        .carousel-inner {
          display: flex;
          transition: transform 0.5s ease-in-out;
        }
        .carousel-item {
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
        button.prev,
        button.next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.5);
          border: none;
          color: white;
          padding: 10px;
          cursor: pointer;
        }
        button.prev { left: 10px; }
        button.next { right: 10px; }
        .carou-content { padding: 20px; }
      `;
      document.head.appendChild(CarouDelfautStyle);
    }
    function CarouDelfautBuilderTimer() {
      let autoSlide = setInterval(nextSlide, 7000);
      function resetAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = setInterval(nextSlide, 7000);
      } 
    }
    if (!arg || arg === "") {
      console.warn("CarouBuilder: DelfautBuilder: You must specify a system to apply the delfaut build. Delfaut build will be considered as 'all'.");
      arg = "all";
    }
    if (arg === "all") {
      CarouDelfautBuilderStyles();
      CarouDelfautBuilderTimer();
    }
    if (arg === "styles") {
      CarouDelfautBuilderStyles();
    }
    if (arg === "timer") {
      CarouDelfautBuilderTimer();
    }
  }

  if (action === "insert") {
    selectedCarou.CarouNumber += 1;
    const carouselInner = selectedCarou.querySelector(".carousel-inner");
    if (!carouselInner) {
      console.error("CarouBuilder: carousel-inner not found.");
      return;
    }
    const newItem = document.createElement("div");
    newItem.className = "carousel-item";
    newItem.id = `carousel-item-${selectedCarou.CarouNumber}`;
    newItem.innerHTML = arg || "";
    carouselInner.appendChild(newItem);
  }

  if (action === "delete") {
    const carouselInner = selectedCarou.querySelector(".carousel-inner");
    if (!carouselInner) return;
    const item = carouselInner.querySelector(`#carousel-item-${arg}`);
    if (item) item.remove();
  }

  if (action === "Set") {
    const carouselInner = selectedCarou.querySelector(".carousel-inner");
    if (!carouselInner) return;
    const item = carouselInner.querySelector(`#carousel-item-${arg.index}`);
    if (item) item.innerHTML = arg.content;
  }

  if (!action) {
    console.warn("CarouBuilder: You must specify an action.");
  }
}

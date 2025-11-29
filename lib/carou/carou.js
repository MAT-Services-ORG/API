function Carou(CarouID, action, arg) {
  console.log("CAROU:START");
  const selectedCarou = document.getElementById(CarouID);
  if (!selectedCarou) {
    console.error("CarouBuilder: Carousel ID is missing or incorrect.");
    return;
  }

  if (!selectedCarou.CarouNumber) selectedCarou.CarouNumber = 0;

  function getCarouselInner() {
    return selectedCarou.querySelector('.carousel-inner');
  }

  if (action === "Build") {
    console.log("CAROU:BUILD");
    selectedCarou.innerHTML = `<main class="carousel-main">
        <div class="carousel">
            <div class="carousel-inner"></div>
            <button class="prev">‹-</button>
            <button class="next">-›</button>
        </div>
    </main>`;

    const prevButton = selectedCarou.querySelector('.prev');
    const nextButton = selectedCarou.querySelector('.next');
    const carouselInner = getCarouselInner();
    let currentIndex = 0;

    function updateCarousel() {
      const items = carouselInner.querySelectorAll('.carousel-item');
      if (items.length === 0) return;
      items.forEach((item, i) => {
        item.classList.toggle('active', i === currentIndex);
      });
      carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextButton.addEventListener('click', () => {
      const items = carouselInner.querySelectorAll('.carousel-item');
      if (items.length === 0) return;
      currentIndex = (currentIndex + 1) % items.length;
      updateCarousel();
      if (typeof selectedCarou._carouTimerReset === 'function') selectedCarou._carouTimerReset();
    });

    prevButton.addEventListener('click', () => {
      const items = carouselInner.querySelectorAll('.carousel-item');
      if (items.length === 0) return;
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      updateCarousel();
      if (typeof selectedCarou._carouTimerReset === 'function') selectedCarou._carouTimerReset();
    });

    selectedCarou._updateCarousel = function (index) {
      const items = carouselInner.querySelectorAll('.carousel-item');
      if (items.length === 0) {
        carouselInner.style.transform = '';
        return;
      }
      if (typeof index === 'number') currentIndex = Math.max(0, Math.min(index, items.length - 1));
      if (currentIndex >= items.length) currentIndex = 0;
      items.forEach((item, i) => item.classList.toggle('active', i === currentIndex));
      carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    };
  }

  if (action === "BuildDelfauts") {
    console.log("CAROU:BUILDDel");
    function CarouDelfautBuilderStyles() {
      const CarouDelfautStyle = document.createElement('style');
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
          width: 100%;
          height: calc(100vh - 80px);
          background-size: cover;
          background-position: center;
          border-radius: 10px;
          text-align: left;
          background-color: black;
          color: white;
          box-sizing: border-box;
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
      const carouselInner = getCarouselInner();
      if (!carouselInner) {
        console.warn('CarouBuilder: no .carousel-inner element found for timer. Call Build first.');
        return;
      }

      let currentIndex = 0;

      function showSlide(index) {
        const items = carouselInner.querySelectorAll('.carousel-item');
        const totalItems = items.length;
        if (totalItems === 0) {
          carouselInner.style.transform = '';
          return;
        }
        currentIndex = ((index % totalItems) + totalItems) % totalItems;
        items.forEach((item, i) => item.classList.toggle('active', i === currentIndex));
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
      }

      function nextSlide() {
        const items = carouselInner.querySelectorAll('.carousel-item');
        if (items.length === 0) return;
        showSlide(currentIndex + 1);
      }

      let autoSlide = setInterval(nextSlide, 7000);
      function resetAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = setInterval(nextSlide, 7000);
      }

      selectedCarou._carouTimerReset = resetAutoSlide;
      selectedCarou._carouShowSlide = showSlide;
      selectedCarou._carouNextSlide = nextSlide;

      return { showSlide, nextSlide, resetAutoSlide };
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
    console.log("CAROU:INSERT");
    selectedCarou.CarouNumber += 1;
    const carouselInner = getCarouselInner();
    if (!carouselInner) {
      console.error("CarouBuilder: carousel-inner not found.");
      return;
    }
    const newItem = document.createElement("div");
    newItem.className = "carousel-item";
    newItem.id = `carousel-item-${selectedCarou.CarouNumber}`;
    newItem.innerHTML = arg || "";
    carouselInner.appendChild(newItem);

    const items = carouselInner.querySelectorAll('.carousel-item');
    const lastIndex = items.length - 1;

    if (typeof selectedCarou._updateCarousel === 'function') {
      selectedCarou._updateCarousel(lastIndex);
    } else if (typeof selectedCarou._carouShowSlide === 'function') {
      selectedCarou._carouShowSlide(lastIndex);
    } else {
      items.forEach((item, i) => item.classList.toggle('active', i === lastIndex));
      carouselInner.style.transform = `translateX(-${lastIndex * 100}%)`;
    }

    if (typeof selectedCarou._carouTimerReset === 'function') selectedCarou._carouTimerReset();
  }

  if (action === "delete") {
    console.log("CAROU:DELETE");
    const carouselInner = getCarouselInner();
    if (!carouselInner) return;
    const item = carouselInner.querySelector(`#carousel-item-${arg}`);
    if (item) item.remove();

    const items = carouselInner.querySelectorAll('.carousel-item');
    if (items.length === 0) {
      carouselInner.style.transform = '';
    } else {
      if (typeof selectedCarou._updateCarousel === 'function') selectedCarou._updateCarousel(0);
      else {
        items.forEach((it, i) => it.classList.toggle('active', i === 0));
        carouselInner.style.transform = `translateX(-0%)`;
      }
    }
  }

  if (action === "Set") {
    console.log("CAROU:SET");
    const carouselInner = getCarouselInner();
    if (!carouselInner) return;
    const item = carouselInner.querySelector(`#carousel-item-${arg.index}`);
    if (item) item.innerHTML = arg.content;
  }

  if (!action) {
    console.warn("CarouBuilder: You must specify an action.");
  }
  console.log("CAROU:END");
}
function Carou(CarouID, action, arg) { 
  let selectedCarou = document.getElementById(CarouID);
  if (CarouID == "") {console.error("CarouBuilder: Carousel ID is missing.")};
  if (action == "Build") {
    CarouID.CarouNumber = 0 ;
    selectedCarou.innerHTML = `<main class="carousel-main">
        <div class="carousel">
            <div class="carousel-inner">
              
            </div>
            <button class="prev">‹-</button>
            <button class="next">-›</button>
        </div>
    </main>`;
    document.selectedCarou.append(selectedCarou.innerHTML);

  };
  if (action == "BuildDelfauts") {
    
    // Delfaut exits
    function CarouDelfautBuilderStyles() {
        // DELFAUT STYLES
        let CarouDelfautStyle = document.createElement('style');
        CarouDelfautStyle.innerHTML = `<style>
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
                
            button.carou-prev,
            button.carou-next {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                background: rgba(0, 0, 0, 0.5);
                border: none;
                color: white;
                padding: 10px;
                cursor: pointer;
            }
                
            button.carou-prev {
                left: 10px;
            }
                
            button.carou-next {
                right: 10px;
            }
            .carou-content {
                padding: 20px;
            }
            
          </style>`;
          document.head.appendChild(CarouDelfautStyle);
    }
    function CarouDelfautBuilderTimer() {
      // TODO: INSERT TIMER SCRIPT HERE! //
    }
    
    // Delfaut entries
    if (arg == "") {
      console.warn(
        `
            CarouBuilder: 
            |-> DelfautBuilder: You must specify a system to apply the delfaut build.
            Delfaut build will be considered as "all". For more informations, go to https://mat-services.github.io/API/wiki/
        `
      );
    }
    if (arg == "all") {
      // TODO: INSERT ALL DELFAUT BUILDS HERE //
      CarouDelfautBuilderStyles();
    }
    if (arg == "styles") {
      CarouDelfautBuilderStyles();
    }
    if (arg == "timer") {
      // TODO: Add the timer script here. //
    }
  }
  if (action == "insert") {
    // Insert a carousel entry
    CarouID.CarouNumber = CarouID.CarouNumber + 1 ;
    carouInner = document.getElementById(CarouID).getElementById("carousel-inner");
    CarouActualContent = carouInner.innerHTML ;
    carouInner.innerHTML = CarouActualContent,`<div class="carousel-item" id="carousel-item `,CarouID.CarouNumber,`"></div>`;

  };
  if (action == "delette") {
    // Delette a carousel entry
    document.getElementById(CarouID).getElementById(carousel-item, CarouID.CarouNumber).remove();
  }
  if (action == "Set") {
    // Modify a carousel entry
    document.getElementById(CarouID).GetElementById(carousel-item, CarouID.CarouNumber).appendChild(arg);
  };
  if (action == "") {console.warn("CarouBuilder: You must specify an action.")}
}



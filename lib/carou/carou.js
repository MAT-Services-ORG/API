function Carou(CarouID, action, args) { 
  if (CarouID == "") {console.error("CarouBuilder: Carousel ID is missing.")};
  if (action == "Build") {
    // TODO: Insert here the carou builder code. //
  };
  if (action == "BuildDelfauts") {
    
    // Delfaut exits
    function CarouDelfautBuilderStyles() {
        // DELFAUT STYLES
        CarouStyle.textContent = `<style>
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
            
          </style>`
          document.head.appendChild(CarouStyle);
    }
    
    // Delfaut entries
    if (args == "") {
      console.warn(
        `
            CarouBuilder: 
            |-> DelfautBuilder: You must specify a system to apply the delfaut build.
            Delfaut build will be considered as "all". For more informations, go to https://mat-services.github.io/API/wiki/
        `
      )
    }
    if (args == "all") {
      // TODO: INSERT ALL DELFAUT BUILDS HERE //
    }
    if (args == "styles") {
      CarouDelfautBuilderStyles()
    }
    // TODO: Add also the timer runner //
  }
  if (action == "Insert") {
    // Insert a carousel entry
  };
  if (action == "delette") {
    // Delette a carousel entry
  }
  if (action == "Set") {
    // Modify a carousel entry
  };
  if (args != "") {};
}

function CarouDelfautBuilderStyles() {}
/*** Carou builder code for build ONLY!!! ***/

CarouContentBase.textContent = `<main class="carousel-main">
    <div class="carousel">
        <div class="carousel-inner">
      
        </div>
        <button class="prev">‹-</button>
        <button class="next">-›</button>
    </div>
</main>`
document.carou.getElementById(CarouID).appendChild(CarouContentBase)

/*** End of Carou builder code. ***/
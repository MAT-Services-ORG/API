function Carou(CarouID, action, args) {
  if (CarouID == "") {console.error("CarouBuilder: Carousel ID is missing.")};
  if (action == "Build") {
    // Insert here the carou builder code.
  };
  if (action == "Insert") {
    
  };
  if (action == "Set") {
    
  };
  if (args != "") {};
}



// Carou builder code for build ONLY!!!
CarouContentBase.textContent = `

`
document.carou.getElementById(CarouID).appendChild(CarouContentBase)
if (args == "style" = {"delfaut"}) {
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
    
    button.prev {
      left: 10px;
    }
    
    button.next {
      right: 10px;
    }
    .content {
      padding: 20px;
    }

  </style>`
  document.head.appendChild(CarouStyle);
}
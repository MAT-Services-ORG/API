function Carou(CarouID, action, args) {
  // Insert here the carou builder code
  if (CarouID == "") {
    console.error("CarouBuilder: Carousel ID is missing.")
  }
  if (action == "Build") {}
  if (action == "Insert") {}
  if (action == "Set") {}
  if (args != "") {}
}



// Carou builder code for build ONLY!!!
CarouContentBase.textContentBase = `

`
document.carou.getElementById(CarouID).appendChild(CarouContentBase)
document.head.appendChild(CarouStyle);
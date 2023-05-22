function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")
  if(html.classList.contains('light')) {
    img.setAttribute(
      "src",
      "https://yt3.ggpht.com/yti/AHXOFjWiknCA_WIeQ8mpHsQ0_nvcS1saljAUYu4qwBodMQ=s108-c-k-c0x00ffffff-no-rj"
    )
  } else {
    img.setAttribute("src", "https://github.com/Dieggo777.png")
  }
/*if(html.classList.contains('light')) {
  html.classList.remove('light')
} else {
  html.classList.add('light')
}*/
  
}

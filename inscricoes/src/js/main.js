const animateElements = document.querySelectorAll(".animation");

animateElements.forEach(element => {
  setTimeout(()=> {
    element.classList.add("animation-init")
  }, 200)
})
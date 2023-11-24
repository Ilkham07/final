const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
hamburger.addEventListener('click', ()=>{
//Animate Links
navLinks.classList.toggle("open");
links.forEach(link => {
link.classList.toggle("fade");
});
//Hamburger Animation
hamburger.classList.toggle("toggle");
});
function showMore() {
  // Ваш код для раскрытия контента или перехода по ссылке
  alert("Button clicked!"); // Пример: вывод алерта
}
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
                var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
                  return new bootstrap.Popover(popoverTriggerEl)
                })


// ---------------
function changeScale(factor) {
  currentScale *= factor;
  document.getElementById('myVideo').style.transform = 'scale(' + currentScale + ')';
}

function resetScale() {
  currentScale = 1.0;
  document.getElementById('myVideo').style.transform = 'scale(' + currentScale + ')';
}

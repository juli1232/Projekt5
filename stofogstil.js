//modal logind //
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
        }
span.onclick = function () {
modal.style.display = "none";
            }
            
//Nav menu //
function openNav() {
    document.getElementById("Nav").style.width = "100%";
}

function closeNav() {
    document.getElementById("Nav").style.width = "0%";
}

//slideshow //
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n>slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides [i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block"; dots[slideIndex-1].className += " active";
    
}

//sogefunktion //
// Get input element
    let filterInput = document.getElementById('filterInput');
    // Add event listener
    filterInput.addEventListener('keyup', filterItems);

    function filterItems(){
      // Get value of input
      let filterValue = document.getElementById('filterInput').value.toLowerCase();

      // Get items ul
      let ul = document.getElementById('items');
      // Get lis from ul
      let li = ul.querySelectorAll('li.collection-item');

      // Loop through collection-item lis
      for(let i = 0;i < li.length;i++){
        let a = li[i].getElementsByTagName('a')[0];
        // If matched
        if(a.innerHTML.toLowerCase().indexOf(filterValue) > -1){
          li[i].style.display = '';
        } else {
          li[i].style.display = 'none';
        }
      }

    }

//infoknap
function on() {
  document.getElementById("overlayinfo").style.display = "block";
}

function off() {
  document.getElementById("overlayinfo").style.display = "none";
}
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
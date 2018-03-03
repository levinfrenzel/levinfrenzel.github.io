
function openNav() {
    document.getElementById("nav").style.height = "100%";
}

function closeNav() {
    document.getElementById("nav").style.height = "0%";
}


$(document).keyup(function(e) {
  if (e.keyCode == 27) {document.getElementById("nav").style.height = "0%"; }   // esc
});

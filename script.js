

function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");
  
    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

  // Close the menu when any navigation link is clicked
var navLinks = document.querySelectorAll('.nav_list a');
navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        var menuBtn = document.getElementById("myNavMenu");
        if (menuBtn.className.includes("responsive")) {
            menuBtn.className = "nav_menu"; // Close the menu after click
        }
    });
});
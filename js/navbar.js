


var header = document.getElementById("navid");
var btns = header.childNodes;
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}

function openNav() {
  document.getElementById("mySidenav").style.display = "block";
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("mini-nav").style.display = "none";
}

function closeNav() {
  document.getElementById("mySidenav").style.display = "none";
  document.getElementById("main").style.marginLeft= "0";
  if (document.documentElement.scrollTop < 80) {
    document.getElementById("mini-nav").style.display = "none";
  } else {
    document.getElementById('mini-nav').style.display = 'block';
  }
}


window.onscroll = function() {
  if (document.documentElement.scrollTop < 80) {
    closeNav();
    document.getElementById("navid").style.display = 'block';
  } else {
    document.getElementById("navid").style.display = "none";
    if (document.getElementById('mySidenav').style.display == 'block'){

      document.getElementById("mini-nav").style.display = "none";    
    } else {
      document.getElementById('mini-nav').style.display = 'block';
    }
    
  }
}

document.addEventListener(
  "click",
  function (event) {
    // Here we state that if the click happens on the cancel button OR anywhere that is not the contact form AND the click does not happen on any element with the contact class then call the closeForm() function
    if (
      event.target.matches(".closebtn") ||
      (!event.target.closest(".sidenav") &&
      !event.target.closest(".menu-item") &&
      !event.target.closest("#mini-nav"))
    ) {
      closeNav();
    }
  },
  false
);
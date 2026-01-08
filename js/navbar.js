


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
  const sidenav = document.getElementById("mySidenav");
  const main = document.getElementById("main");
  const mini = document.getElementById("mini-nav");

  sidenav.classList.add("open");

  if (isMobile()) {
    sidenav.style.width = "100%";
    main.style.marginLeft = "0";
  } else {
    sidenav.style.width = "250px";
    main.style.marginLeft = "250px";
  }

  mini.style.display = "none";
}

function closeNav() {
  const sidenav = document.getElementById("mySidenav");
  const main = document.getElementById("main");

  sidenav.classList.remove("open");
  sidenav.style.width = "0";
  main.style.marginLeft = "0";

  handleMiniNav();
}


function handleMiniNav() {
  const mini = document.getElementById("mini-nav");

  if (document.documentElement.scrollTop < 80) {
    mini.style.display = "none";
  } else {
    if (document.getElementById("mySidenav").style.display !== "block") {
      mini.style.display = "block";
    }
  }
}

window.addEventListener("scroll", function () {
  handleMiniNav();
});


document.addEventListener("click", function (event) {
  if (
    event.target.matches(".closebtn") ||
    (!event.target.closest(".sidenav") &&
     !event.target.closest(".menu-item") &&
     !event.target.closest("#mini-nav"))
  ) {
    closeNav();
  }
});


window.onscroll = function() {
  if (document.documentElement.scrollTop < 80 && document.getElementById('mySidenav').style.display == 'none') {
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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

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

document.querySelectorAll("#mySidenav a").forEach(link => {
  link.addEventListener("click", () => {
    closeNav();
  });
});


function isMobile() {
  return window.matchMedia("(max-width: 768px)").matches;
}

function hamburger() {
  let x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

function dropdown(){
  let a = document.getElementById("alert");
  let b = document.getElementById("announcement");
  if(a.className === "alert"){
    a.className += " open";
  } else {
    a.className = "alert";
  }
}
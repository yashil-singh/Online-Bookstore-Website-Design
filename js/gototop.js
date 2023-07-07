// To get the button
var mybutton = document.getElementById("gotop");

// To show the button on scroll
window.onscroll = function() {show()};

// Function to show the button
function show() {

  if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {

    mybutton.style.display = "block";

  }

  else {

    mybutton.style.display = "none";

  }

}

// When the user clicks on the button, scroll to the top of the page
function topFunction() {

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

}
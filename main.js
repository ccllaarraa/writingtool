$(document).ready(function() {
// remove start writing here
$(function() {                    
  $("#starthere").click(function() {  
    $(this).addClass("inactive"); 
    $(this).prev("#output").focus().addClass('hello');   
  });
});



// end jquery
});



// avoid right click
// document.addEventListener('contextmenu', event => event.preventDefault());


// when goes on another tab
document.addEventListener("visibilitychange", (event) => {
  if (document.visibilityState == "visible") {
    console.log("back from scratch")
  } else {
      document.getElementById("output").value = "";
  }
});



// email
function sendEmail() {
  var email = document.getElementById("emailID").value;
  var subject = "Today's writing";
  var body = document.getElementById("output").value;
  var myLineBreak = body.replace(/\r\n|\r|\n/g, "%0D%0A");
  window.location = "mailto:" + email + "?subject=" + subject + "&body=" + myLineBreak;
}


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



// change color
var colors = {
  1: "#ffffff",
  2: "#ffffff",
  3: "#FCAED3",
  4: "#F3AEFC",
  5: "#D2AEFC",
  6: "#AEB1FC",
  7: "#AED8FC",
  8: "#AEF3FC",
  9: "#AEFCED",
  10: "#AEFCCF",
  11: "#AEFCB1",
  12: "#CFFCAE",
  13: "#EDFCAE",
  14: "#FCF3AE",
  15: "#FCE4AE",
  16: "#FCD5AE",
  17: "#FCC3AE",
  18: "#FCAEAE"

};

var colorBox= $(".color-box"),
 range = $(".input-range"),
  value = $(".range-value");

value.html(range.attr("value"));

range.on("input", function () {
  value.html(this.value);
  var colorIndex = this.value;
  console.log(colorIndex)
  $(".color-box").css("background-color", colors[colorIndex] );
});
var timeout;

$(document).ready(function() {
// remove start writing here
$(function() {                    
  $("#starthere").click(function() {  
    $(this).addClass("inactive"); 
    $(this).prev("#output").focus().addClass('hello');   
  });
});



// clock
var clara;
$(".timer").click(function () {
  $('.timeroff').addClass("flex");
  $(this).removeClass("flex");

 clara = setTimeout(function(){
  console.log("settimeout");
  $("#clockmessage").addClass("block");
 },600000);

})

$(".timeroff").click(function () {
  clearInterval(clara);
 $(this).removeClass('flex');
 $(".timer").addClass("flex")
})

$("#clockmessage").click(function () {
  $(this).addClass("ciao");
  $(this).removeClass("block");
  $(".timeroff").removeClass("flex");
  $(".timer").addClass("flex");
})


// about
$(".about-btn").click(function () {
  $(".about-ctn").addClass("block");
})

$(".close-about").click(function () {
  $(".about-ctn").removeClass("block");
})

// end jquery
});



// avoid right click
document.addEventListener('contextmenu', event => event.preventDefault());

// avoid deleting text
var inputoftext = document.getElementById('output');
inputoftext.onkeydown = function (event) {
  if (event.which == 8) { 
       event.preventDefault();   // turn off browser transition to the previous page 
               // put here code you need 
      }; 

};   
// when goes on another tab
document.addEventListener("visibilitychange", (event) => {
  if (document.visibilityState == "visible") {
  } else {
      document.getElementById("output").value = "";
  }
});



// email
function sendEmail() {
  var email = document.getElementById("emailID").value;
  var subject = "Tranquil words, today's writing";
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
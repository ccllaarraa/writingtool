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
// Saving showMeButton class on a variable
const showMeButton = document.querySelector(".showMeButton");
// add event listner on button so that when users clicks the div of music top 10 shows
showMeButton.addEventListener("click", myFunction);
// seletcting the div we want to show
document.querySelector(`.musicBox`).classList.toggle(`hidden`);
function myFunction() {
  // adding class hidden to hide the content or show it using toggle
  document.querySelector(`.musicBox`).classList.toggle(`hidden`);
}

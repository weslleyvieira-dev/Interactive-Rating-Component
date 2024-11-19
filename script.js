const ratingCard = document.querySelector(".rating");
const thanksCard = document.querySelector(".thanks");
const ratingButtons = document.querySelectorAll(".rating-btn");
const submitButton = document.querySelector(".submit-btn");
const selectedRating = document.querySelector(".selected-rating");
let rating = 0;

ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    rating = button.getAttribute("data-rating");
    ratingButtons.forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");
  });
});

submitButton.addEventListener("click", () => {
  if (rating > 0) {
    selectedRating.textContent = rating;
    ratingCard.style.display = "none";
    thanksCard.style.display = "flex";
  }
});

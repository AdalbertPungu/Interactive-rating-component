document.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll(".rating__button button");
  const submitButton = document.querySelector(".rating__submit");
  const thankYouCard = document.querySelector(".card__thank-you");
  const ratingCard = document.querySelector(".card__rating");
  const selectedRatingSpan = document.getElementById("selected-rating");

  let selectedRating = null;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      selectedRating = button.dataset.value;
      selectedRatingSpan.textContent = ` ${selectedRating} `;

      buttons.forEach((btn) => {
        btn.style.backgroundColor = "";
        btn.style.color = "";
      });
      button.style.backgroundColor = "white";
      button.style.color = "black";
    });
  });

  submitButton.addEventListener("click", () => {
    if (selectedRating) {
      ratingCard.classList.add("hidden");
      thankYouCard.classList.remove("hidden");
    }
  });
});

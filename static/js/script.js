document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const modalClose = document.getElementsByClassName("modal-close")[0];

  // When any thumbnail is clicked:
  document.querySelectorAll(".thumb").forEach(function (thumb) {
    thumb.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.getAttribute("data-full");
    });
  });

  // Close modal when close button is clicked
  modalClose.addEventListener("click", function () {
    modal.style.display = "none";
    modalImg.src = ""; // Clear src
  });

  // Also close modal if user clicks outside the image
  modal.addEventListener("click", function (e) {
    if (e.target === this) {
      modal.style.display = "none";
      modalImg.src = "";
    }
  });
});

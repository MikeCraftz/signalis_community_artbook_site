document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const modalClose = document.getElementsByClassName("modal-close")[0];

  document.querySelectorAll(".thumb").forEach(function (thumb) {
    thumb.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.getAttribute("data-full");
    });
  });

  modalClose.addEventListener("click", function () {
    modal.style.display = "none";
    modalImg.src = "";
  });

  modal.addEventListener("click", function (e) {
    if (e.target === this) {
      modal.style.display = "none";
      modalImg.src = "";
    }
  });
});
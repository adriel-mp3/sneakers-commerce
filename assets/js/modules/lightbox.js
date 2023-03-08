import initGaleria from "./galeria.js";
export default function initLightbox() {
  const lightboxImages = document.querySelectorAll(
    '[data-lightbox="main-img"] > img'
  );
  const lightboxModal = document.querySelector('[data-lightbox="modal"]');
  const lightboxPopup = document.querySelector('[data-lightbox="popup"]');
  const previousBtn = document.querySelector('[data-lightbox="previous"]');
  const nextBtn = document.querySelector('[data-lightbox="next"]');
  const exitBtn = document.querySelector('[data-lightbox="close"]');

  function activeLightbox() {
    if (!this.classList.contains("active")) {
      lightboxModal.classList.add("active");
    }
    outsideClick(lightboxModal, () => {
      closeLightbox();
    });
  }

  function closeLightbox() {
    lightboxModal.classList.remove("active");
  }

  function outsideClick(element, callback) {
    lightboxModal.addEventListener("click", handleOutsideClick);
    function handleOutsideClick(event) {
      if (element === event.target) {
        callback();
        lightboxModal.removeEventListener("click", handleOutsideClick);
      }
    }
  }

  function nextImage() {
    const imageActiveIndex = Array.from(lightboxImages).findIndex((heroImage) =>
      heroImage.classList.contains("active")
    );
    lightboxImages.forEach((image) => {
      image.classList.remove("active");
    });
    if (imageActiveIndex < lightboxImages.length - 1) {
      lightboxImages[imageActiveIndex + 1].classList.add("active");
    } else {
      lightboxImages[0].classList.add("active");
    }
  }

  function previousImage() {
    const imageActiveIndex = Array.from(lightboxImages).findIndex((heroImage) =>
      heroImage.classList.contains("active")
    );
    lightboxImages.forEach((image) => {
      image.classList.remove("active");
    });
    if (imageActiveIndex !== 0) {
      lightboxImages[imageActiveIndex - 1].classList.add("active");
    } else {
      lightboxImages[lightboxImages.length - 1].classList.add("active");
    }
  }

  function windowObserver() {
    if (window.innerWidth < 900) {
      lightboxPopup.removeEventListener("click", activeLightbox);
      closeLightbox()
    } else {
      lightboxPopup.addEventListener("click", activeLightbox);
    }
  }

  lightboxPopup.addEventListener("click", activeLightbox);
  exitBtn.addEventListener("click", closeLightbox);
  nextBtn.addEventListener("click", nextImage);
  previousBtn.addEventListener("click", previousImage);
  window.addEventListener("resize", windowObserver);

  initGaleria(
    '[data-lightbox="main-img"] > img',
    '[data-lightbox="thumbnails"] img'
  );
}

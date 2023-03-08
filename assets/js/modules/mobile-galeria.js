export default function initMobileGaleria() {
  const lightboxImages = document.querySelectorAll(
    '[data-galeria="main-img"] > img'
  );

  const mobilePreviousBtn = document.querySelector(
    '[data-mobile="btn-previous"]'
  );
  const mobileNextBtn = document.querySelector('[data-mobile="btn-next"]');

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

  mobilePreviousBtn.addEventListener("click", previousImage);
  mobileNextBtn.addEventListener("click", nextImage);
}

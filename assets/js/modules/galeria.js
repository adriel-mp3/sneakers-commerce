export default function initGaleria(heroImagesSelector, heroThumbnailsSelector) {
  const heroImages = document.querySelectorAll(heroImagesSelector);
  const heroThumbnails = document.querySelectorAll(heroThumbnailsSelector);
  if (heroImages && heroThumbnails) {
    function changeImage(index) {
      heroImages.forEach((heroImage) => heroImage.classList.remove("active"));
      heroThumbnails.forEach((heroImage) => heroImage.classList.remove("active"));

      heroThumbnails[index].classList.add("active");
      heroImages[index].classList.add("active");
    }

    heroThumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener("click", () => {
        changeImage(index);
      });
    });
  }
};


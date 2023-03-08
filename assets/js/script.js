import initMenuMobile from "./modules/menu-mobile.js";
import initGaleria from "./modules/galeria.js";
import initLightbox from "./modules/lightbox.js";
import initCart from "./modules/cart.js";
import initMobileGaleria from "./modules/mobile-galeria.js";

initMenuMobile();
initGaleria('[data-galeria="main-img"] > img', '[data-galeria="thumbnails"] img');
initLightbox();
initCart();
initMobileGaleria();


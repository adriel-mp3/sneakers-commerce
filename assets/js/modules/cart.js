export default function initCart() {
  const cartDropdown = document.querySelector('[data-cart="dropdown"]');
  const cartContent = document.querySelector('[data-cart="content"]');
  const cartEmpty = document.querySelector('[data-cart="empty"]');
  const cartItem = document.querySelector('[data-cart="item"]');
  const cartAmount = document.querySelector('[data-cart="amount"]');
  const cartBtnTrash = document.querySelector('[data-cart="trash"]');
  const cartBtnAddToCart = document.querySelector('[data-cart="add"]');
  const minusBtn = document.querySelector('[data-cart="btn-minus"]');
  const plusBtn = document.querySelector('[data-cart="btn-plus"]');
  const valueCart = document.querySelector('[data-cart="value"]');
  const cartCounter = document.querySelector('.counter-cart');

  function activeCart() {
    cartContent.classList.add("active");
    outsideClick(this, () => {
      cartContent.classList.remove("active");
    });
  }

  function outsideClick(element, callback) {
    const html = document.documentElement;
    const outside = "data-outside";
    if (!element.hasAttribute(outside)) {
      html.addEventListener("click", handleOutsideClick);
      element.setAttribute(outside, "");
    }
    function handleOutsideClick(event) {
      if (!element.contains(event.target)) {
        callback();
        element.removeAttribute(outside);
        html.removeEventListener("click", handleOutsideClick);
      }
    }
  }

  function addLess() {
    if (valueCart.innerText !== "1") {
      valueCart.innerText--;
    }
  }

  function addMore() {
    valueCart.innerText++;
  }

  function addItemToCart() {
    cartEmpty.classList.remove("active");
    cartItem.classList.add("active");
    if (valueCart.innerText > 1) {
      cartCounter.innerText = valueCart.innerText;
      cartAmount.innerHTML = `$125.00 x ${
        valueCart.innerText
      } <span class="item-total">$${(125.0 * valueCart.innerText).toFixed(
        2
      )}</span>`;
    }
    valueCart.innerText = 1;
  }

  function removeCartItem() {
    cartEmpty.classList.add("active");
    cartItem.classList.remove("active");
    cartCounter.innerText = 0;
  }

  cartDropdown.addEventListener("click", activeCart);
  minusBtn.addEventListener("click", addLess);
  plusBtn.addEventListener("click", addMore);
  cartBtnAddToCart.addEventListener("click", addItemToCart);
  cartBtnTrash.addEventListener("click", removeCartItem);
}

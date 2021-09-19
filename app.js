const userIcon = document.querySelector(".user-sm");
const userNavbar = document.querySelector(".navbar-user");
const productImg = document.querySelectorAll(".product-content__img");
const addToCart = document.querySelectorAll(
  ".product-content__img .add-to-cart"
);
const productListNavBtns = document.querySelectorAll(".product-list-nav-btn");
const productListNavs = document.querySelectorAll(".product-list-nav-list");
const productListNavItems = document.querySelectorAll(
  ".product-list-nav-list__item"
);
const suggestCollectionLists = document.querySelectorAll(
  "#suggest-collection .product-content__detail"
);

userIcon.onclick = function () {
  userNavbar.classList.toggle("navbar-user--sm");
};

for (let i = 0; i < productListNavBtns.length; i++) {
  productListNavBtns[i].onclick = function () {
    productListNavs[i].classList.toggle("show");
  };
}

for (let i = 0; i < productListNavItems.length; i++) {
  productListNavItems[i].onclick = () => {
    let productListNavItemIsActive = document.querySelector(
      ".product-list-nav-list__item.active"
    );
    productListNavItemIsActive.classList.remove("active");
    productListNavItems[i].classList.add("active");
  };
}

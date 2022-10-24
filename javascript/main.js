import cartItems from "./cartItems.js";

const productArticle = document.querySelector("article");

const sneakerItem = new cartItems(
  1,
  "Fall Limited Edition Sneakers",
  "These low-profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sole, they'll withstand everything the weather can offer. ",
  "$250.00",
  "50%",
  "$125.00",
  0
);

const renderItem = () => {
  return () => {
    productArticle.innerHTML = `
        <!-- Headings -->

        <section>
        <header class="headings">
            <h1>Sneaker Company</h1>
            <h2>${sneakerItem.name}</h2>
        </header>
        </section>

        <!-- Product Description -->

        <section>
        <p class="product-description">
            ${sneakerItem.description}
        </p>
        <p class="product-pricing">
            <span class="discounted-price">${sneakerItem.discountedPrice}</span>
            <span class="discount">${sneakerItem.discount}</span>
        </p>
        <p class="original-price">${sneakerItem.price}</p>
        </section>
        
                    <section class="cart-attributes-container">
                    <section class="quantity-attribute">
                    <!-- Minus Icon -->
                        <svg
                            class="minus-icon"
                            width="12"
                            height="12"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                            <defs>
                            <path
                                d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                                id="a"
                            />
                            </defs>
                            <use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#a" />
                        </svg>

                    <!-- Quantity Amount Value -->
                    <p class="quantity-amount-value">0</p>

                    <!-- Plus Icon -->
                        <svg
                            class="plus-icon"
                            width="12"
                            height="12"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                            <defs>
                            <path
                                d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                                id="b"
                            />
                            </defs>
                            <use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#b" />
                        </svg>
                    </section>

                    <!-- Add to cart button section -->
                    
                    <button class="add-to-cart-button">
                        <svg
                            class="cart-icon"
                            width="22"
                            height="20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                            fill="#ffff"
                            fill-rule="nonzero"
                            />
                        </svg>
                    Add to cart
                    </button>
                </section>
    `;
  };
};

const print = renderItem();
print();

// Cart Functionality:

const quantityValue = document.querySelector(".quantity-amount-value");
const svgPlusIcon = document.querySelector(".plus-icon");
const svgMinusIcon = document.querySelector(".minus-icon");

let valueCounter = 0;
quantityValue.innerText = valueCounter;

const arrayItems = [];

svgMinusIcon.style.cursor = "pointer";
svgMinusIcon.addEventListener("click", () => {
  valueCounter--;

  if (valueCounter >= 0) {
    quantityValue.innerText = valueCounter;
  } else {
    return;
  }
});

svgPlusIcon.style.cursor = "pointer";
svgPlusIcon.addEventListener("click", () => {
  valueCounter++;

  if (valueCounter >= 0) {
    quantityValue.innerText = valueCounter;
  } else {
    return;
  }
});

// Add to cart button:

const addToCartButton = document.querySelector(".add-to-cart-button");
addToCartButton.style.cursor = "pointer";

addToCartButton.addEventListener(
  "click",
  () => {
    if (arrayItems !== 0) {
      arrayItems.push(sneakerItem);
      const findName = arrayItems.find((x) => {
        return x.name === "Fall Limited Edition Sneakers";
      });
      console.log(`Item with the name ${findName} already exists`);
    }
  },
  false
);

const avatar = document.querySelector(".avatar");
const body = document.querySelector("body");
const mainheader = document.querySelector("header");

const container = document.createElement("div");
container.className = "basket-container";
mainheader.appendChild(container);

const section = document.createElement("section");
section.className = "basket-active-state-container";
const basketHeader = document.createElement("header");
basketHeader.className= "active-state-header";
const basketHeading = document.createElement("h3");
basketHeading.className = "basket-heading";

container.appendChild(section);
section.appendChild(basketHeader);
basketHeader.appendChild(basketHeading);

basketHeading.innerText = "Cart ";

const horizontalLine  = document.createElement("hr");
horizontalLine.className = "hr";
section.appendChild(horizontalLine);

const basketContent = document.createElement("article")
basketContent.className = "basket-content";
section.appendChild(basketContent);

const basketEmpty = document.createElement("section");
basketEmpty.className = "basket-empty";
basketEmpty.innerText = "Your Cart is Empty";

basketContent.appendChild(basketEmpty);

/**
 * ! Cart Javascript:
 */

const cart = document.querySelector(".cart");
console.log(cart)

cart.addEventListener("mouseover", function(){
    container.style.display = "block";
})
cart.addEventListener("mouseleave", function(){
    container.style.display = "none";
})



/**
 * ! Profile Javascript: 
 */

const profileBorder = document.querySelector(".profile-border");
avatar.addEventListener("click",function(){
    
    profileBorder.style.display = "block";
})
avatar.addEventListener("mouseleave",function(){
    profileBorder.style.display = "none";
})

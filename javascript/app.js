const navElement = document.querySelector("nav");
const menuIcon = document.querySelector(".menu-icon");
const buttonClose = document.querySelector(".close-button");

function displayNav(){
    if(navElement.classList.contains("nav-desktop-active")){
        navElement.classList.remove("nav-mobile-active");
        buttonClose.style.display = "none"; 
    }
}
displayNav();

menuIcon.addEventListener("click",function(){
    navElement.classList.replace("nav-desktop-active", "nav-mobile-active")
    if(navElement.classList.contains("nav-mobile-active")){
        buttonClose.style.display = "block";
        buttonClose.addEventListener("click",function(){
            navElement.classList.replace("nav-mobile-active", "nav-desktop-active")
            if(navElement.className === "nav-desktop-active"){
                buttonClose.style.display = "none";
            }
        })
    }
})

console.log(navElement);

const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");
const imageTranslate = document.querySelectorAll(".hero-section-image");

let clickCounter = 0;
let clickCounterPrevious

nextButton.addEventListener("click", function(){
    clickCounter ++;
    for(let i = 0; i < imageTranslate.length; i++){
        if(clickCounter === 1){
            imageTranslate[i].style.transform = "translate(-100%)"; 
        }
        else if(clickCounter === 2){
            imageTranslate[i].style.transform = "translate(-200%)"; 
        }
        else if(clickCounter === 3){
            imageTranslate[i].style.transform = "translate(-300%)"; 
        }
        else if(clickCounter > 3){
            imageTranslate[i].style.transform = "translate(0%)";
        }    
    }
    console.log("hello")
})
previousButton.addEventListener("click",function(){
    clickCounterPrevious ++;
    for(let i = 0; i < imageTranslate.length; i++){
        if(clickCounter >= 0){
            imageTranslate[i].style.transform = "translate(0%)"; 
        }
    }
})

// Cart Functionality: 

const quantityValue = document.querySelector(".quantity-amount-value");
const svgPlusIcon = document.querySelector(".plus-icon");
const svgMinusIcon = document.querySelector(".minus-icon");

let valueCounter = 0;
quantityValue.innerHTML = valueCounter;

svgMinusIcon.addEventListener("click", () =>{
    valueCounter --;

    if (valueCounter >= 0){
        quantityValue.innerHTML = valueCounter;
    }
    else{
        return; 
    }
})

svgPlusIcon.addEventListener("click", () =>{
    valueCounter ++;

    if(valueCounter >= 0){
        quantityValue.innerHTML = valueCounter;
    }
    else{
        return;
    }
})

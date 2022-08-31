const lightbox = document.createElement("div");
lightbox.className = "lightbox-overlay-container";
document.body.appendChild(lightbox);


lightbox.style.display = "none";
lightbox.classList.remove("lightbox-overlay-container");

const openLightBox = document.querySelector(".hero-section-image");
openLightBox.addEventListener("click",function(){
    if(lightbox.classList.contains("lightbox-overlay-container")){
        return;
    }
    else{
        lightbox.classList.add("lightbox-overlay-container");
        lightbox.style.display = "block";
    }
})

lightbox.addEventListener("click", e =>{
    if(e.target !== e.currentTarget){
        return
    }
    lightbox.classList.remove("lightbox-overlay-container");
})

const lightboxContent = document.createElement("div");
lightboxContent.className = "light-box-content";
lightbox.appendChild(lightboxContent);

const imgSvgElement = document.createElement("img");
lightboxContent.appendChild(imgSvgElement);
imgSvgElement.setAttribute("src", "../images/icon-close.svg");
imgSvgElement.className = "modal-exit-button";

imgSvgElement.addEventListener("click",function(){
    lightbox.classList.remove("lightbox-overlay-container");
    lightbox.style.display = "none";  
})
console.log(imgSvgElement);

const mainImageContainer = document.createElement("div");
mainImageContainer.className = "main-image-container";

const selectedImage = document.createElement("img");
selectedImage.className = "main-image";
mainImageContainer.appendChild(selectedImage);
lightboxContent.appendChild(mainImageContainer);

selectedImage.setAttribute("src", "../images/image-product-1-thumbnail.jpg");

const lightBoxPrev = document.createElement("div");
const lightBoxNext = document.createElement("div");
lightBoxPrev.classList.add("fa", "fa-angle-left","lightbox-prev");
lightBoxNext.classList.add("fa", "fa-angle-right", "lightbox-next");

console.log(mainImageContainer.firstElementChild);
console.log(mainImageContainer.firstChild);
mainImageContainer.appendChild(lightBoxNext);
mainImageContainer.appendChild(lightBoxPrev);

const selectionContainer = document.createElement("div");
selectionContainer.className = "lb-selection-container";
lightboxContent.appendChild(selectionContainer);

for (let i = 0; i < 4; i++){
    const availableImage = document.createElement("img");
    availableImage.className = "lb-img";
    availableImage.setAttribute("data-index", `${[i]}`);
    selectionContainer.appendChild(availableImage);
}

const selectAllImages = document.getElementsByClassName("lb-img");
for (let item of selectAllImages){
    selectAllImages[0].setAttribute("src", "../images/image-product-1-thumbnail.jpg");
    selectAllImages[1].setAttribute("src", "../images/image-product-2-thumbnail.jpg");
    selectAllImages[2].setAttribute("src", "../images/image-product-3-thumbnail.jpg");
    selectAllImages[3].setAttribute("src", "../images/image-product-4-thumbnail.jpg");
}
console.log(selectAllImages);


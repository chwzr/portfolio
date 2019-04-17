// This is a main JavaScript file that will ll be compiled into /javascripts/site.js
//
// Any JavaScript file in your site folder can be referenced here by using import or require statements.
// Additionally, you can import modules installed via your package.json file.
//
// For example:
// import './fileName'
//
// To learn more, visit https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

// Image Slideshow

var slideshows = document.querySelectorAll(".div-slideshow");
var allSlides = document.querySelectorAll(".slide");
var count = [];

for (var i = 0; i < slideshows.length; i++) {
    count[i] = 0;
}

function slideshow() {
    for (var i = 0; i < allSlides.length; i++) {
        allSlides[i].setAttribute("style", "display: none;");
    }

    for (var i = 0; i < slideshows.length; i++) {
        count[i]++;

        if (count[i] == slideshows[i].childElementCount - 1) {
            count[i] = 1;
        }

        slideshows[i].getElementsByTagName("img")[count[i] - 1].setAttribute("style", "display: block;");
    }

    setTimeout(slideshow, 2000);
}

slideshow();

// Image Gallery

var openGalleryInputs = document.querySelectorAll(".input-open-gallery");
var closeGalleryInputs = document.querySelectorAll(".input-close-gallery");
var prevImageInputs = document.querySelectorAll(".input-prev-image");
var nextImageInputs = document.querySelectorAll(".input-next-image");

var galleryId = 0;
var divGallery;

openGalleryInputs.forEach(element => {
    var id = element.dataset.gallery;
    var imageIndex = element.dataset.image;

    element.addEventListener("click", function() { showGallery(id, imageIndex); }, false);
});

for (var i = 0; i < closeGalleryInputs.length; i++) {
    closeGalleryInputs[i].addEventListener("click", closeGallery, false);
}

for (var i = 0; i < prevImageInputs.length; i++) {
    prevImageInputs[i].addEventListener("click", showPrevImage, false);
}

for (var i = 0; i < nextImageInputs.length; i++) {
    nextImageInputs[i].addEventListener("click", showNextImage, false);
}

function showGallery(id, imageIndex) {
    galleryId = id;

    divGallery = document.getElementById("div-gallery-" + id);

    divGallery.style.display = "block";

    var images = divGallery.getElementsByTagName("li");

    images[imageIndex].className = "li-image-visible";
}

function closeGallery() {
    divGallery = document.getElementById("div-gallery-" + galleryId);

    var visibleImage = divGallery.getElementsByClassName("li-image-visible")[0];

    visibleImage.className = "";

    divGallery.style.display = "none";
}

function showPrevImage() {
    divGallery = document.getElementById("div-gallery-" + galleryId);

    var nodes = Array.prototype.slice.call(divGallery.getElementsByTagName("ul")[0].children);
    var images = divGallery.getElementsByTagName("li");
    var visibleImage = divGallery.getElementsByClassName("li-image-visible")[0];

    var index = nodes.indexOf(visibleImage);

    if (index > 0) {
        images[index - 1].className = "li-image-visible";
    } else {
        images[divGallery.getElementsByTagName("ul")[0].childElementCount - 1].className = "li-image-visible";
    }

    visibleImage.className = "";
}

function showNextImage() {
    divGallery = document.getElementById("div-gallery-" + galleryId);

    var nodes = Array.prototype.slice.call(divGallery.getElementsByTagName("ul")[0].children);
    var images = divGallery.getElementsByTagName("li");
    var visibleImage = divGallery.getElementsByClassName("li-image-visible")[0];

    var index = nodes.indexOf(visibleImage);

    if (index < divGallery.getElementsByTagName("ul")[0].childElementCount - 1) {
        images[index + 1].className = "li-image-visible";
    } else {
        images[0].className = "li-image-visible";
    }

    visibleImage.className = "";
}

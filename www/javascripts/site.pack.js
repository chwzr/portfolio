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

var slideshow = function() {
    var slides = document.querySelectorAll(".slide");
    
    for (var i = 0; i < slides.length; i++) {
        slides[i].setAttribute("style", "display: none;");
    }

    count++;

    if (count > slides.length) {
        count = 1;
    }

    slides[count - 1].setAttribute("style", "display: block;");

    setTimeout(slideshow, 2000);
}

var count = 0;

slideshow();

// Image Gallery

document.getElementById("input-open-gallery").onclick = showGallery;
document.getElementById("input-close-gallery").onclick = closeGallery;
document.getElementById("input-prev-image").onclick = showPrevImage;
document.getElementById("input-next-image").onclick = showNextImage;

var divGallery;

function showGallery() {
    

    divGallery.style.display = "block";

    var images = divGallery.getElementsByTagName("li");

    images[0].className = "li-image-visible";
}

function closeGallery() {
    var visibleImage = divGallery.getElementsByClassName("li-image-visible")[0];

    visibleImage.className = "";

    divGallery.style.display = "none";
}

function showPrevImage() {
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
    var nodes = Array.prototype.slice.call(divGallery.getElementsByTagName("ul")[0].children);
    var images = divGallery.getElementsByTagName("li");
    var visibleImage = divGallery.getElementsByClassName("li-image-visible")[0];

    var index = nodes.indexOf(visibleImage);

    console.log(divGallery.getElementsByTagName("ul")[0].childElementCount);

    if (index < divGallery.getElementsByTagName("ul")[0].childElementCount - 1) {
        images[index + 1].className = "li-image-visible";
    } else {
        images[0].className = "li-image-visible";
    }

    visibleImage.className = "";
}

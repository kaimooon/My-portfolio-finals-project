$("a").click(function(event) {
    event.preventDefault(); 
    let newLocation = this.href;

    $("body").fadeOut(900, function() {
        window.location = newLocation;
    });
});
$(document).ready(function() {
    $("body").css("display", "none"); 
    $("body").fadeIn(900);
});

$("#FB_button").hover(
    function() {
        $(this).animate({
            marginTop: "-10px"
        }, 200);
    },
    function() {
        $(this).animate({
            marginTop: "0px"
        }, 200);
    }
);

$("#insta_button").hover(
    function() {
        $(this).animate({
            marginTop: "-10px"
        }, 200);
    },
    function() {
        $(this).animate({
            marginTop: "0px"
        }, 200);
    }
);

$("#github_button").hover(
    function() {
        $(this).animate({
            marginTop: "-10px"
        }, 200);
    },
    function() {
        $(this).animate({
            marginTop: "0px"
        }, 200);
    }
);

$("#proj1link_button").hover(
    function() {
        $(this).animate({
            marginTop: "-10px"
        }, 200);
    },
    function() {
        $(this).animate({
            marginTop: "0px"
        }, 200);
    }
);

$("#proj2link_button").hover(
    function() {
        $(this).animate({
            marginTop: "-10px"
        }, 200);
    },
    function() {
        $(this).animate({
            marginTop: "0px"
        }, 200);
    }
);

$("#proj3link_button").hover(
    function() {
        $(this).animate({
            marginTop: "-10px"
        }, 200);
    },
    function() {
        $(this).animate({
            marginTop: "0px"
        }, 200);
    }
);

const image = document.getElementById('image');
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');

const images = ['p1_pic1.png', 'p1_pic2.png', 'p1_pic3.png', 'p1_pic4.png', 'p1_pic5.png', 'p1_pic6.png', 'p1_pic7.png'];
let currentImageIndex = 0;

leftBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
    image.src = images[currentImageIndex];
});

rightBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
    image.src = images[currentImageIndex];
});

const image2 = document.getElementById('image2');
const leftBtn2 = document.getElementById('left-btn2');
const rightBtn2 = document.getElementById('right-btn2');

const images2 = ['p2_pic1.png', 'p2_pic2.png', 'p2_pic3.png', 'p2_pic4.png'];
let currentImageIndex2 = 0;

leftBtn2.addEventListener('click', () => {
    currentImageIndex2 = (currentImageIndex2 === 0) ? images2.length - 1 : currentImageIndex2 - 1;
    image2.src = images2[currentImageIndex2];
});

rightBtn2.addEventListener('click', () => {
    currentImageIndex2 = (currentImageIndex2 === images2.length - 1) ? 0 : currentImageIndex2 + 1;
    image2.src = images2[currentImageIndex2];
});

const image3 = document.getElementById('image3');
const leftBtn3 = document.getElementById('left-btn3');
const rightBtn3 = document.getElementById('right-btn3');

const images3 = ['p3_pic1.png', 'p3_pic2.png', 'p3_pic3.png'];
let currentImageIndex3 = 0;

leftBtn3.addEventListener('click', () => {
    currentImageIndex3 = (currentImageIndex3 === 0) ? images3.length - 1 : currentImageIndex3 - 1;
    image3.src = images3[currentImageIndex3];
});

rightBtn3.addEventListener('click', () => {
    currentImageIndex3 = (currentImageIndex3 === images3.length - 1) ? 0 : currentImageIndex3 + 1;
    image3.src = images3[currentImageIndex3];
});
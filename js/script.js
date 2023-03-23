// array
const imgs = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// variabili
let image;
let i;
let addImgs = document.querySelector(".imgs");
let addSmallImgs = document.querySelector(".small-imgs");

// aggiungiamo le immagini nascoste su html
for (i = 0; i < imgs.length; i++) {
    image = imgs[i];
    addImgs.innerHTML += `<div class="single-img hidden">
                                <img src="${image.image}" alt="${image.title}">
                                <div class="description">
                                      <h3>${image.title}</h3>
                                      <p>${image.text}</p>
                                </div>
                          </div>`

    addSmallImgs.innerHTML += `<div class="single-small-img">
                                    <img class="small opacity" src="${image.image}" alt="${image.title}">
                                </div>`
}




let visibleImage = document.getElementsByClassName("single-img");
let smallImgs = document.getElementsByClassName("small");


// rendiamo visibile la prima immagine
let visibleImageNumber = 0;
visibleImage[visibleImageNumber].classList.remove("hidden");
smallImgs[visibleImageNumber].classList.remove("opacity");


const upper = document.querySelector(".top");
const lower = document.querySelector(".bottom");

// scorriamo le immagini ogni 3 secondi
let interval = setInterval(nextImgs, 3000);

// blocchiamo lo scorrimento all'hover
addImgs.addEventListener("mouseover", function () {
    clearInterval(interval);


})

// sblocchiamo lo scorrimento quando leviamo il mouse

addImgs.addEventListener("mouseout", function () {

    clearInterval(interval);
    interval = setInterval(nextImgs, 3000);

})






// bottone sotto
lower.addEventListener("click", nextImgs);

// blocchiamo lo scorrimento automatico al click

lower.addEventListener("click", function () {

    clearInterval(interval);

})





// bottone su
upper.addEventListener("click", beforeImgs);

// blocchiamo lo scorrimento automatico al click
upper.addEventListener("click", function () {

    clearInterval(interval);

})




// Funzione  che scorre le immagini
function nextImgs() {
    if (visibleImageNumber == imgs.length - 1) {

        visibleImage[visibleImageNumber].classList.add("hidden");
        smallImgs[visibleImageNumber].classList.add("opacity");
        visibleImageNumber = 0;
        visibleImage[visibleImageNumber].classList.remove("hidden");
        smallImgs[visibleImageNumber].classList.remove("opacity");


    } else {

        visibleImage[visibleImageNumber].classList.add("hidden");
        smallImgs[visibleImageNumber].classList.add("opacity");


        visibleImageNumber++;
        visibleImage[visibleImageNumber].classList.remove("hidden");
        smallImgs[visibleImageNumber].classList.remove("opacity");



    }



}

// Funzione  che scorre le immagini

function beforeImgs() {

    if (visibleImageNumber == 0) {

        visibleImage[visibleImageNumber].classList.add("hidden");
        smallImgs[visibleImageNumber].classList.add("opacity");
        visibleImageNumber = imgs.length - 1;
        visibleImage[visibleImageNumber].classList.remove("hidden");
        smallImgs[visibleImageNumber].classList.remove("opacity");


    } else {

        visibleImage[visibleImageNumber].classList.add("hidden");
        smallImgs[visibleImageNumber].classList.add("opacity");
        visibleImageNumber--;
        visibleImage[visibleImageNumber].classList.remove("hidden");
        smallImgs[visibleImageNumber].classList.remove("opacity");


    }

}



console.log(addImgs);
console.log(i);



console.log(smallImgs);
console.log(visibleImage);



const projectPage1 = document.querySelectorAll('#project1 .img');
const projectPage2 = document.querySelectorAll('#project2 .img');
const projectPage1Descriptions = document.querySelectorAll('#project1 .desc');
const projectPage2Descriptions = document.querySelectorAll('#project2 .desc');
const projectPage1PrincipalDesc = document.querySelector('#project1 .principal-desc');
const projectPage2PrincipalDesc = document.querySelector('#project2 .principal-desc');


const projectsDescriptions = document.querySelectorAll('.projects .desc');
const projectsPrincipalDesc = document.querySelector('.projects .principal-desc');


const websitesImages = document.querySelectorAll('#websites .img');
const websitesDescriptions = document.querySelectorAll('#websites .desc');
const websitesPrincipalDesc = document.querySelector('#websites .principal-desc');

const presentationImage = document.querySelectorAll('#presentation .img');
const presentationPrincipalDesc = document.querySelector('#presentation .principal-desc');

const body = document.querySelector('body');
const overlay = document.querySelector('#overlay');
const overlayContent = document.querySelector('#overlay-content');
const overlayBody = document.querySelector('#overlay-body');
const overlayLeft = document.querySelector('#overlay #left');
const overlayRight = document.querySelector('#overlay #right');

const closeOverlay = document.querySelector('#close-overlay');
const overlayContainer = document.querySelector('#overlay-container');
const slideLinkRight = document.querySelectorAll('.slide-link-right');
const slideLinkLeft = document.querySelectorAll('.slide-link-left');
const articlesContainer = document.querySelector('#articles');
const articles = document.querySelectorAll('article');
const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const about = document.querySelector('#about');
const work = document.querySelector('#work');
const skills = document.querySelector('#skills');
const contact = document.querySelector('#contact');


// Styling
articlesContainer.style.width = articles.length * 100 + '%';

projectPage1.forEach((img, key) => {
    key += 1;

    img.style.backgroundImage = `url(./images/projects/${key}/1.png`;
});

let key = 5;
projectPage2.forEach((img) => {
    img.style.backgroundImage = `url(./images/projects/${key}/1.png`;
    key++;
});




function articleInteraction(images, descriptions, principalDesc) {
    for (let i = 0; i < images.length; i++) {

        if (descriptions) {

            images[i].addEventListener('mouseover', () => {

                descriptions[i].style.display = 'block';
                principalDesc.style.display = 'none';

                /*for (let image of images) {
                    image.style.opacity = '0.15';
                    images[i].style.opacity = '1';
                }*/

            });
            images[i].addEventListener('mouseout', () => {

                descriptions[i].style.display = 'none';
                principalDesc.style.display = 'block';

                /*for (let image of images) {
                    image.style.opacity = '1';
                }*/
            });

            images[i].addEventListener('click', () => {
                overlay.style.display = 'block';
                body.style.overflow = 'hidden';

                overlayContainer.innerHTML = "";
                let imagesSlider = document.createElement("div");
                imagesSlider.classList.add("images-slider");
                overlayContainer.appendChild(imagesSlider);
                let imagesContainer = document.createElement("div");
                imagesContainer.classList.add("overlay-images");
                // imagesContainer.style.display = "grid";
                // imagesContainer.style.gap = "1em";
                // imagesContainer.style.gridTemplateColumns = "1fr 1fr";
                // imagesContainer.style.gridTemplateRows = "1fr 1fr";
                for (let j = 0; j < 4; j++) {
                    let image = document.createElement("img");
                    // image.style = "width: 100%; height: 100%; object-fit: cover";
                    if (currentSlide == 3) {
                        image.src = `./images/projects/${i+5}/${j + 1}.png`;
                    } else {
                        image.src = `./images/projects/${i + 1}/${j + 1}.png`;
                    }
                    imagesContainer.appendChild(image);
                }
                imagesSlider.appendChild(imagesContainer);
                // overlayContent.src = images[i].dataset.url;
                // console.log(images[i].dataset.url);
                let overlayBody = document.createElement("p");
                overlayBody.innerHTML = descriptions[i].innerHTML;
                overlayBody.classList.add("overlay-body");
                overlayContainer.appendChild(overlayBody);

            })

        } else {
            images[i].addEventListener('click', () => {
                overlay.style.display = 'block';
                body.style.overflow = 'hidden';

                overlayContent.src = images[i].dataset.url;
                overlayBody.textContent = principalDesc.textContent;

            })
        }
    }
}

articleInteraction(projectPage1, projectPage1Descriptions, projectPage1PrincipalDesc);
articleInteraction(projectPage2, projectPage2Descriptions, projectPage2PrincipalDesc);
// articleInteraction(presentationImage, null, presentationPrincipalDesc);

closeOverlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    body.style.overflow = 'auto';

});



// slides
let currentSlide = 1;

// nav links

about.addEventListener('click', () => {
    leftClick(2);
})
work.addEventListener('click', () => {
    rightClick(1)
})
skills.addEventListener('click', () => {
    rightClick(3)
})
contact.addEventListener('click', () => {
    rightClick(4)
})

function rightClick(slide) {
    if (slide) {
        currentSlide = slide;
    }
    if (currentSlide < articles.length) {

        for (let i = 0; i < articles.length; i++) {

            articles[i].style = `transform: translateX(-${(currentSlide) * 100}vw);`;

        }
        currentSlide++;


    } else {

        currentSlide = -1;

        for (let i = 0; i < articles.length; i++) {

            articles[i].style = `transform: translateX(-${(currentSlide) * 100}vw);`;

        }
        currentSlide = 1;

    }


    displayTitle(currentSlide);
    displayBackground(currentSlide);

};



function leftClick(slide) {
    if (slide) {
        currentSlide = slide;
    }
    if (currentSlide > 1) {

        for (let i = 0; i < articles.length; i++) {


            articles[i].style = `transform: translateX(-${(currentSlide - 2) * 100}vw)`

        }
        currentSlide--;


    } else {

        currentSlide = articles.length + 1;

        for (let i = 0; i < articles.length; i++) {

            articles[i].style = `transform: translateX(-${(currentSlide - 2) * 100}vw)`

        }
        currentSlide--;

    }


    displayTitle(currentSlide);
    displayBackground(currentSlide);

}



function displayTitle(currentSlide) {

    let titles = document.querySelectorAll('#bottom h2');
    let currentTitle = document.querySelector(`h2[data-title="${currentSlide}"]`);

    for (let title of titles) {
        title.style.display = 'none';

        currentTitle.style = 'display: block; transform: scale(50%) translateX(-200%);';

        setTimeout(() => {
            currentTitle.style = 'display: block; transform: scale(100%) translateX(0%);'
        })

    }

}


function displayBackground(currentSlide) {

    const images = ['llleaves.svg', 'ffflux.svg', 'ffflurry.svg', 'ffflux1.svg', 'ffflux.svg']

    document.getElementById('background').style = `background: url('./images/bg/${images[currentSlide - 1]}') center no-repeat; background-size: cover; transition: 1s ease-in-out; opacity: 0.1`;

}


// setTimeout(() => {
//     nav.style = "max-height: 0px; transition: max-height 1s ease-in-out"
// })

menu.addEventListener('click', () => {
    switch (menu.dataset.toggle) {
        case 'closed':
            nav.style.display = 'flex';
            body.style.overflow = 'hidden';
            // nav.style.width = '900px';
            menu.dataset.toggle = 'opened';
            break;
        case 'opened':
            nav.style.display = 'none';
            body.style.overflow = 'auto';
            // nav.style.width = '0px'; 
            menu.dataset.toggle = 'closed';
            break;
        default:
            nav.style.display = 'none'


    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 800) {
        nav.style.display = 'flex';
        body.style.overflow = 'hidden';
    } else {
        nav.style.display = 'none';
        body.style.overflow = 'auto';
    }
})
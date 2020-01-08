'use strict'

// Main template for the images
function populate(data,dataNames) {

           return `<div class="slide__img-wrapper" id="btn1">
            <div class="slide__container-image">
                    <img src="${data[0]}" alt="img3">
            </div>
            <div class="slide__container-image-details">
                <h2 class="headings">${dataNames[0]}</h2>
                <div class="content">
                    <div class="content-para">
                    <p>We all wish and desire the thing we want the most, but lack what it takes or is demanded to achieve our goal.</p>
                        <a target="_blank" href="${data[0]}" id="view">View image <i class="fa fa-photo"></i></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="slide__img-wrapper">
            <div class="slide__container-image">
                <img src="${data[1]}" alt="img3">
            </div>
            <div class="slide__container-image-details">
                <h2 class="headings">${dataNames[1]}</h2>
                <div class="content">
                    <div class="content-para">
                    <p>We all wish and desire the thing we want the most, but lack what it takes or is demanded to achieve our goal.</p>
                        <a target='_blank' href="${data[1]}">View image <i class="	fa fa-photo"></i></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="slide__img-wrapper">
            <div class="slide__container-image">
                <img src="${data[2]}" alt="img3">
            </div>
            <div class="slide__container-image-details">
                <h2 class="headings">${dataNames[2]}</h2>
                <div class="content">
                    <div class="content-para">
                    <p>We all wish and desire the thing we want the most, but lack what it takes or is demanded to achieve our goal.</p>
                        <a target='_blank' href="${data[2]}">View image <i class="	fa fa-photo"></i></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="slide__img-wrapper">
            <div class="slide__container-image">
                <img src="${data[3]}" alt="img3">
            </div>
            <div class="slide__container-image-details">
                <h2 class="headings">${dataNames[3]}</h2>
                <div class="content">
                    <div class="content-para">
                    <p>We all wish and desire the thing we want the most, but lack what it takes or is demanded to achieve our goal.</p>
                        <a target='_blank' href="${data[3]}">View image <i class="	fa fa-photo"></i></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="slide__img-wrapper">
            <div class="slide__container-image">
                <img src="${data[4]}" alt="img3">
            </div>
            <div class="slide__container-image-details">
                <h2 class="headings">${dataNames[4]}</h2>
                <div class="content">
                    <div class="content-para">
                    <p>We all wish and desire the thing we want the most, but lack what it takes or is demanded to achieve our goal.</p>
                        <a target='_blank' href="${data[4]}">View image <i class="fa fa-photo"></i></a>
                    </div>
                </div>
            </div>
        </div>
</div>` 
};

///////////////////////////////////////////////////////////////////////////////////////

//container for the items
const listItems = document.querySelector('.slide');
listItems.innerHTML = populate(carsImages.cars,carsImages.name)

// Catalogue name
const catalogName = document.querySelector('.catalog-name');


// Technology image link
const technologyLink = document.getElementById('button1');
      technologyLink.addEventListener('click',() => {
      catalogName.innerHTML = Techimages.getName();
      listItems.innerHTML = populate(Techimages.technology,Techimages.name);
});


// Phone image link
const phoneLink = document.getElementById('button2');
      phoneLink.addEventListener('click',() => {
      catalogName.innerHTML = phoneImages.getName();
      listItems.innerHTML = populate(phoneImages.phones,phoneImages.name)
});


// Men image link
const menLink = document.getElementById('button3');
      menLink.addEventListener('click',() => {
      catalogName.innerHTML = menImage.getName();
      listItems.innerHTML = populate(menImage.men,menImage.name)
});


// Car image link
const carLink = document.getElementById('button4');
      carLink.addEventListener('click', () => {
        catalogName.innerHTML = carsImages.getName();
        listItems.innerHTML = populate(carsImages.cars,carsImages.name)
      })




//functionalitis code

// dropdown button
const hamburger = document.querySelector('.header__navbar-left');
let value = true;


// code for the dropdown menu
hamburger.addEventListener('click', () => {
    let dropdown = document.querySelector('.nav__hamburger-content');
    if(value) {
        dropdown.style.display = 'block';
        value = false;
    }else {
        dropdown.style.display = "none";
        value = true;
    }
});















































































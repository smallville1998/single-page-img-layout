
// Image Object

const Techimages = {
    technology: [
        './assert/img/technology/1.jpg',
        './assert/img/technology/2.jpg',
        './assert/img/technology/3.jpg',
        './assert/img/technology/4.jpg',
        './assert/img/technology/6.jpg',
    ],
    name: ['Tokyo machine','wall screenpad','Tele-mecsh','Table screenprint','Wall telephone'],
    categoryName: 'Technology'
}

const phoneImages = {
    phones: [
        './assert/img/phones/11.jpg',
        './assert/img/phones/22.jpg',
        './assert/img/phones/33.jpg',
        './assert/img/phones/44.jpg',
        './assert/img/phones/55.jpg',
    ],
    name: ['Iphonex','Iphonemax','IOS Iphone','Iphone 10','Iphone12'],
    categoryName: 'Phone'
};

const menImage = {
    men: [
        './assert/img/men/1.jpg',
        './assert/img/men/2.jpg',
        './assert/img/men/3.jpg',
        './assert/img/men/4.jpg',
        './assert/img/men/5.jpg',
    ],
    name: ['Chinose shirt','fixos trouser','Epix dress','Smart look','bixcol suit'],
    categoryName: 'Men'
}


const carsImages = {
    cars: [
        './assert/img/cars/1.jpg',
        './assert/img/cars/11.jpg',
        './assert/img/cars/5.jpg',
        './assert/img/cars/4.jpg',
        './assert/img/cars/7.jpg',
    ],
    name: ['Toyota','Camiry','Anaconder','Mercedese','Mercedese'],
    categoryName: 'Cars'
};


Object.prototype.getName = function() {
    return this.categoryName;
};
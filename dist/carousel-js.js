'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var setImageToCarousel = function setImageToCarousel(carouselImageElement, imagen) {
  var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  carouselImageElement.src = imagen.src.replace('thumb', 'large');
  carouselImageElement.id = 'gallery-' + i;
};

var getIndexCarouselCurrentImg = function getIndexCarouselCurrentImg(carouselImageElement) {
  return parseInt(carouselImageElement.id.split('-')[1], 10);
};

var animateCarousel = function animateCarousel(carouselImageElement, images, delay) {
  var time = 0;
  var timeDelay = delay;
  var i = 1;
  setImageToCarousel(carouselImageElement, images[0]);
  setInterval(function () {
    if (i === getIndexCarouselCurrentImg(carouselImageElement)) {
      if (time === timeDelay) {
        if (i < images.length - 1) {
          i++;
        } else {
          i = 0;
        }
        setImageToCarousel(carouselImageElement, images[i], i);
        time = 0;
        timeDelay = delay;
      } else {
        time += 100;
      }
    } else {
      i = getIndexCarouselCurrentImg(carouselImageElement);
      time = 0;
      timeDelay = delay * 2;
    }
  }, 100);
};

var prevButtonEvent = function prevButtonEvent(carouselImageElement, prevNavElement, images) {
  prevNavElement.addEventListener('click', function () {
    var i = getIndexCarouselCurrentImg(carouselImageElement);
    i = i > 0 ? --i : images.length - 1;
    setImageToCarousel(carouselImageElement, images[i], i);
  });
};
var nextButtonEvent = function nextButtonEvent(carouselImageElement, nextNavElement, images) {
  nextNavElement.addEventListener('click', function () {
    var i = getIndexCarouselCurrentImg(carouselImageElement);
    i = i < images.length - 1 ? ++i : 0;
    setImageToCarousel(carouselImageElement, images[i], i);
  });
};

var navigatorCarousel = function navigatorCarousel(carouselImageElement, prevNavElement, nextNavElement, images) {
  prevButtonEvent(carouselImageElement, prevNavElement, images);
  nextButtonEvent(carouselImageElement, nextNavElement, images);
};

var carousel = function carousel(carouselImageElement, prevNavElement, nextNavElement, images, delay) {
  navigatorCarousel(carouselImageElement, prevNavElement, nextNavElement, images);
  animateCarousel(carouselImageElement, images, delay);
};

(function () {
  if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && _typeof(module.exports) === 'object') {
    module.exports = carousel;
  }
})();
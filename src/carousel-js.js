const setImageToCarousel = (carouselImageElement, imagen, i = 0) => {
  carouselImageElement.src = imagen.src.replace('thumb', 'large');
  carouselImageElement.id = `gallery-${i}`;
};

const getIndexCarouselCurrentImg = carouselImageElement => parseInt(carouselImageElement.id.split('-')[1], 10);

const animateCarousel = (carouselImageElement, images, delay) => {
  let time = 0;
  let timeDelay = delay;
  let i = 1;
  setImageToCarousel(carouselImageElement, images[0]);
  setInterval(() => {
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

const prevButtonEvent = (carouselImageElement, prevNavElement, images) => {
  prevNavElement.addEventListener('click', () => {
    let i = getIndexCarouselCurrentImg(carouselImageElement);
    i = i > 0 ? --i : images.length - 1;
    setImageToCarousel(carouselImageElement, images[i], i);
  });
};
const nextButtonEvent = (carouselImageElement, nextNavElement, images) => {
  nextNavElement.addEventListener('click', () => {
    let i = getIndexCarouselCurrentImg(carouselImageElement);
    i = i < images.length - 1 ? ++i : 0;
    setImageToCarousel(carouselImageElement, images[i], i);
  });
};

const navigatorCarousel = (carouselImageElement, prevNavElement, nextNavElement, images) => {
  prevButtonEvent(carouselImageElement, prevNavElement, images);
  nextButtonEvent(carouselImageElement, nextNavElement, images);
};

const carousel = (carouselImageElement, prevNavElement, nextNavElement, images, delay) => {
  navigatorCarousel(carouselImageElement, prevNavElement, nextNavElement, images);
  animateCarousel(carouselImageElement, images, delay);
};

(() => {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = carousel;
  }
}
)();

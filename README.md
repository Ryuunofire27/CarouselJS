# CarouselJS

CarouselJS is a simple way to add a slider.

## How to use

Adding the script.

```
<script src="https://cdn.jsdelivr.net/npm/carousel-js/dist/carousel-js.min.js" ></script>
```

Or install

```
npm i --save carousel-js
```

and using with [browserify](https://github.com/browserify/browserify)

### Using

carousel(carouselImageElement, prevNavElement, nextNavElement, images, delay);

### Parameters

carouselImageElement : The img element.

prevNavElement : The element with the control prev img.

prevNavElement : The element with the control next img.

images : An array with the images.

delay : the time in milliseconds to delay the change.
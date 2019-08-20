import smallSizeImage from './assets/small-image.jpg';
import normalSizeImage from './assets/normal-image.jpg';
import bigSizeImage from './assets/big-image.png';


let result = [1, 2, 3].map((n) => n + 1);

let element = document.createElement('div');
element.innerHTML = 'hello world';
document.body.appendChild(element);

let smallSizeImageElement = document.createElement(('img'));
smallSizeImageElement.src = smallSizeImage;
document.body.appendChild(smallSizeImageElement)

let normalSizeImageElement = document.createElement(('img'));
normalSizeImageElement.src = normalSizeImage;
document.body.appendChild(normalSizeImageElement)

let bigSizeImageElement = document.createElement(('img'));
bigSizeImageElement.src = bigSizeImage;
document.body.appendChild(bigSizeImageElement)
import makeHtmlTemplate from "./make-html-template.js";
import images from "./images.js";

const imageList = document.getElementById('image-list');

images.forEach(image => {
    console.log(image);
    const dom = makeHtmlTemplate(image);
    imageList.appendChild(dom);
});
import helloWorld from './hello-world';
import book from './java_book.jpg';
import altText from './alt_name.txt';

console.log('Sample Webpack Config');
helloWorld();

const img=document.createElement('img');
img.width='200';
img.src=book;
img.alt=altText;

const body=document.querySelector('body');
body.appendChild(img);
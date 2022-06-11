import helloWorld from './hello-world';
import book from './java_book.jpg';
import altText from './alt_name.txt';
import '../styles.scss'; 

console.log('Sample Webpack Config');
helloWorld();

class AddImage{
  x='altText';
  render(){
    const z=()=>{
      console.log("" ?? 1);
    }
    z();
    const img=document.createElement('img');
    img.width='200';
    img.src=book;
    img.alt=this.x;
    const body=document.querySelector('body');
    body.appendChild(img);
  }
}

const y=new AddImage();
y.render();
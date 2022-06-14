import helloWorld from './hello-world';
import altText from './alt_name.txt';
import book from './java_book.jpg';
import book1 from '../opened-book.jpg';
import '../styles.scss'; 

helloWorld();

class AddImage{
  x=altText;
  render(bk){
    const z=()=>{
      console.log("" ?? 1);
    }
    z();
    const img=document.createElement('img');
    img.width='200';
    img.src=bk;
    img.alt=this.x;
    const body=document.querySelector('body');
    body.appendChild(img);
  }
}

const y=new AddImage();
y.render(book);
y.render(book1);
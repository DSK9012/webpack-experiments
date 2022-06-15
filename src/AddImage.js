import altText from './alt_name.txt';

class AddImage{
  x=altText;
  render(bk){
    const img=document.createElement('img');
    img.width='200';
    img.src=bk;
    img.alt=this.x;
    const body=document.querySelector('body');
    body.appendChild(img);
  }
}

const y=new AddImage();
export default y;
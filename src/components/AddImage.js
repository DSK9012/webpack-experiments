import altName from '../utils/alt-name.txt';

export default class AddImage{
  imgAltName=altName;

  render(book){
    const img=document.createElement('img');
    img.width='200';
    img.src=book;
    img.alt=this.imgAltName;
    const body=document.querySelector('body');
    body.appendChild(img);
  }
}

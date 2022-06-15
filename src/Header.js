
class Header{
  render(name){
    const header=document.createElement('h1');
    header.textContent=name;
    const body=document.querySelector('body');
    body.appendChild(header);
  }
}

const z=new Header();

export default z;
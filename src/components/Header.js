export default class Header{
  render(name){
    const header=document.createElement('h1');
    header.textContent=name;
    const body=document.querySelector('body');
    body.appendChild(header);
  }
}

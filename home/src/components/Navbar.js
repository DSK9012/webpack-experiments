const  pages=[
  {
    name:'FirstApp',
    path:'/first-app',
  },
  {
    name:'SecondApp',
    path:'/second-app',
  },
]

export default class Navbar{
  render(){
    const nav=document.createElement('nav');
    nav.className='navbar';
    const ul=document.createElement('ul');
    ul.innerHTML=pages.map(page=>`<li><a href=${page.path}>${page.name}</a></li>`).join('');
    nav.appendChild(ul);
    const body=document.querySelector('body');
    body.appendChild(nav);
  }
}
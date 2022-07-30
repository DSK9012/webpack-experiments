import Navbar from './components/Navbar';
import './styles/styles.scss';

const location=window.location.pathname;


if(location==='/first-app' || location==='/')
import('FirstApp/FirstAppMainPage').then(FirstAppMainPageModule=>{
  const MainPage=FirstAppMainPageModule.default;
  const mainPage=new MainPage();
  mainPage.render();
});

if(location==='/second-app')
import('SecondApp/SecondAppMainPage').then(SecondAppMainPageModule=>{
  const MainPage=SecondAppMainPageModule.default;
  const mainPage=new MainPage();
  mainPage.render();
});

const navbar=new Navbar();
navbar.render();
import _ from 'lodash';
import book from '../assets/book.jpg';
import '../styles/styles.scss';

export  default class MainPage{
  render(){
    import('FirstApp/FirstAppHeader')
    .then((FirstAppHeaderModule)=>{
      const Header=FirstAppHeaderModule.default;
      const header=new Header();
      header.render(_.upperCase('Second-Page'));
    });
    
    import('FirstApp/FirstAppAddImage')
    .then((FirstAppAddImageModule)=>{
      const AddImage=FirstAppAddImageModule.default;
      const addImage=new AddImage();
      addImage.render(book);
    });
  }
}

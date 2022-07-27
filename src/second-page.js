import _ from 'lodash';
import AddImage from './components/AddImage';
import book from './assets/book.jpg';
import Header from './components/Header';
import './styles/styles.css'; 

const header=new Header();
const addImage=new AddImage();

header.render(_.upperCase('Second-Page'));
addImage.render(book);
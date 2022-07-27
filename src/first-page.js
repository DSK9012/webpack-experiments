import Header from './components/Header';
import AddImage from './components/AddImage';
import book from './assets/java_book.jpg';
import './styles/styles.scss'; 

const header=new Header();
const addImage=new AddImage();

header.render('First-Page');
addImage.render(book);

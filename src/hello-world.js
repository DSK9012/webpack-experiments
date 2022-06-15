import '../styles2.css'; 
import y from './AddImage';
import book1 from '../opened-book.jpg';
import z from './Header';
import _ from 'lodash';

z.render(_.upperCase('Hello-world-page'));
function helloWorld(){
  console.log('Hello World 143');
}

y.render(book1);

export default helloWorld;
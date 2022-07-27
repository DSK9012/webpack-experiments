const path=require('path');
const fs=require('fs');
const express=require('express');
const app=express();

app.use('/static',express.static(path.resolve(__dirname, './dist')))

const renderPage=(page)=>{
  const file=fs.readFileSync(page, 'utf-8');
  return file;
};

app.get('/', (req, res)=>{
  const pathToHtml=path.resolve(__dirname, './dist/first-page.html');
  return res.send(renderPage(pathToHtml));
});

app.get('/first-page', (req, res)=>{
  const pathToHtml=path.resolve(__dirname, './dist/first-page.html');
  return res.send(renderPage(pathToHtml));
});

app.get('/second-page', (req, res)=>{
  const pathToHtml=path.resolve(__dirname, './dist/second-page.html');
  return res.send(renderPage(pathToHtml));
});

app.listen(3000, ()=>console.log('server started on 3000'));
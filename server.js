const path=require('path');
const fs=require('fs');
const express=require('express');
const app=express();

app.use('/static', express.static(path.resolve(__dirname, './dist')))

app.get('/start-page', (req, res)=>{
  const pathToHtml=path.resolve(__dirname, './dist/start-page.html');
  const readContent=fs.readFileSync(pathToHtml, 'utf-8');
  res.send(readContent);
});

app.get('/render-image', (req, res)=>{
  const pathToHtml=path.resolve(__dirname, './dist/render-image.html');
  const readContent=fs.readFileSync(pathToHtml, 'utf-8');
  res.send(readContent);
});

app.listen(3000);
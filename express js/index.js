// первым делом npm init -y 

// npm install express - установка expressJs

// чтобы работать с import/export добавляем "type": "module" в package.json

//npm install -D nodemon  для того  чтобы автоматический обновлялся сервер и мы его не перезапускали при каком-то изменении
// далее переходим в package.json и в "scripts" добавляем "serve": "nodemon index.js" и "start": "node index.js" после пишем npm run serve
import path from 'path';
import {requestTime,logger} from './middlewares.js'
const __dirname = path.resolve();
import express from 'express'; //импортируем express
const app = express(); // теперь эта переменная является объеектом с помощью которой мы можем вызывать разные методы
const PORT = 3000;

// используем переход на другие страницы с помощью концепта middleware

app.use(express.static(path.resolve(__dirname, 'static'))) // теперь не нужно делать get запросы чтобы перейти на страницы,
// достаточно в ссылка указать тип файла в нашем случае .html

app.use(requestTime);
app.use(logger);





// Чтобы у нас не было ошибки и был осмысленный код на странице нам надо обработать get запрос по url '/'
//app.get('/', (req,res )=> { // req отвечает за запрос, а res за ответ
    //res.send('<h1>Hello express!!!!<h1>');
 //   res.sendFile(path.resolve(__dirname, 'static', 'index.html')); // отображаем на страницы html из файла по url (/)
//});
//app.get('/features', (req,res )=> { // 
 
  //  res.sendFile(path.resolve(__dirname, 'static', 'otherindex.html')); // отображаем на страницы html из файла по url (/features)
//});
app.get('/download', (req,res )=> { // 
    console.log(req.requestTime); // middleware
    res.download(path.resolve(__dirname, 'static', 'index.html')); //  метод download позволяет скачать содержимое файла по указанному пути
});


app.listen(PORT,()=> { // этот медот запускает наш web-server,туда передаем обязательный параметр - порт, 2 параметр это коллбаск функция которая позволяет делать какие-то действия
    console.log('server has been started...');
}) 
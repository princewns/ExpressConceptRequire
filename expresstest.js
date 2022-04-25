//npm install express
const express = require('express');
//npm install body-parser --save
const bodyParser = require('body-parser');
const { response } = require('express');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.get('/', (request, response) => {
    const template = `
    <form method = 'post'>
        <input type='text' name='num1'>
        <input type='text' name='num2'>
        <input type='submit' value='전송'>
    </form>
    `;
    response.send(template);
});

app.post('/', (request,response) => {
    //form 으로 보내준 값을 request의 body 에서 가져와서 html 코드로 보내줌
    const num1 = Number(request.body.num1); //Number() = 문자값을 숫자로 변환함
    const num2 = Number(request.body.num2);
    response.send(`<h1>${num1}+${num2}=${num1+num2}</h1>`);
});
//node expresstest.js

app.listen(8080, () => {
    console.log('server running at http://127.0.0.1:8080');
});
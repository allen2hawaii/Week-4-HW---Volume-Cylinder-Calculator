//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

app.post('/', function(req, res) {
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);

    //volume of cylinder = pi * r^2 * h
    var result = (Math.PI * Math.pow(num1, 2) * num2).toFixed(2);

    res.send(`<b>Volume of Cylinder</b> = ${result}. `)
})

app.listen(3000, () => console.log('Listening on port 3000.'));
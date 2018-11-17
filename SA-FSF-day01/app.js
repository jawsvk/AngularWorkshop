
// const http = require('http');

// http.createServer(function (req,res) {

//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello World')
// }).listen(1337,'127.0.0.1');

// console.log('Server is running at 127.0.0.1:1337');

// import express library
const express = require('express');

// instantiation
var app = express();

// create an endpoint
app.get('/', function(req,res){
res.send('Hello World 2')

})

app.listen(1337, function(){
    console.log('server is running at localhost 1337');
    
})

// declare person object

function Person() {
    this.first_name = "Kenneth",
    this.last_name ="Chua",
    this.age = 20
}

class Shape {
    constructor(){
                this.text="i'm just a shape";
    }
   
}

class Square extends Shape {
    constructor()
    {
        super();
        //this.text = "I am a square"
    }
}

var q = new Square();
console.log(q.text)
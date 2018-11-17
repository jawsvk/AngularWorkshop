const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongoDB').MongoClient
const assert = require('assert');

// 'mongodb://mguser:password123@ds121262.mlab.com:21262/mangosteen'
const MONGODB_URL = process.env.MONGODB_URL ||'process unassigned'
var app = express();
const port = process.env.PORT || 'unassigned port'
console.log('port is ', port)
const dbName = 'mangosteen'

var router = express.Router();

app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))
app.use(bodyParser.json({limit:'50mb'}));

app.use('/', router);



var popQuiz = {
    "question": "What is my name?",
    "answers": [
        {"selection": "a", "value": "Kenneth"},
        {"selection": "b", "value": "Lisa"},
        {"selection": "c", "value": "Andrew"},
        {"selection": "d", "value": "Sally"}    

    ],
    "correctAnswer": "a"
}

MongoClient.connect(MONGODB_URL, function(err,client){
    //if no error connect to database  
    console.log('URL is', MONGODB_URL)
    assert.equal(null, err);
    console.log("connecting to MongoDB")

    //to get database object
    const db = client.db();
    var QuizCollection = db.collection('quiz')

    router.get('/testmg',function(rq,res,next){
      //  db.collection('quiz').insertOne(popQuiz, function(err,result){
            console.log(result);

            client.close();
        })
      
    
    
    router.get('/quiz', function(req,res,next){
        QuizCollection.find({}).toArray(function(err,result){
           
           res.json(result)
        })
     
    })
    
    router.post('/check-answer',function (req,res,next) {
        var answer = req.body;
        var isCorrect = false;
        console.log(answer.answer)
        console.log(popQuiz.correctAnswer)
        if(popQuiz.correctAnswer === answer.answer){
            console.log("CORRECT !");
            isCorrect = true
        }else{
            console.log("NOT CORRECT !");
        }
        res.json({result: isCorrect});
    })

})

//1337
app.listen(process.env.PORT, function(){
    console.log("Server is running at localhost:1337")
})
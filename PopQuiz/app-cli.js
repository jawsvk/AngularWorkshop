var prompt = require('prompt')
var request = require('request')

prompt.start();

const API_URL = "http://localhost:1337/";
const QUIZ_API_URL = `${API_URL}quiz`;
const CHECK_ANSWER_API_URL = `${API_URL}check-answer`;


request(QUIZ_API_URL, function (error, response, body) {
    //console.log('error:', error); // Print the error if one occurred
    var popQuiz = JSON.parse(body);
    console.log(popQuiz.question + "\n");
    popQuiz.answers.forEach(element => {
        console.log(element.selection + ". "  + element.value + "\n");
    });
});

setTimeout(function(){

    prompt.get(['answer'], function(err,result){
        console.log('answer is', result.answer )

        var inputAnswer = {
            answer: result.answer
        }

        request({
            url: CHECK_ANSWER_API_URL,
            method: "POST",
            json: inputAnswer
        }, function(error, response, body){
       
            if(body.result === true){
                console.log("BINGO !");
            }else{
                console.log("TRY AGAIN !");
            }
            process.exit(1)
        })

      
    });
},500)





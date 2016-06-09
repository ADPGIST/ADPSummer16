var express = requre('express');
var router = express.Router();
var alexa = requre('alexa');

//Welcome message to the incoming call with Alexa voice
router.post('/welcome', alexa.webhook({validate:false}), function(request,response){
	var alexa = new alexa.AlexaResponse();
	alexa.gather({
        action: "/ivr/menu",
        numDigits: "1",
        method: "POST"
    }, 
	function (node) {
        node.play("http://console.aws.amazon.com/elastictranscoder/home", {loop: 3});
    });
    response.send(alexa);
});


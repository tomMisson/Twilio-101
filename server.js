// Use dotenv to allow us to have a file that store our keys without making them publicly avalible
require('dotenv').config();
const express = require('express')
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.post('/sms', (req, res) => {

    console.log(req.body.Body)

    if(req.body.Body === 'Whats the time?' || req.body.Body === 'time' || req.body.Body === '⏳')
    {
        var twiml = new MessagingResponse();
        var today = new Date();
        var time = today.getHours() + ':' + today.getMinutes();

        twiml.message(time);
        res.writeHead(200, {'Content-Type': 'text/xml'});
        res.end(twiml.toString());
    }
    else{
    }
})

app.post('/call', (req, res) => {

})

app.listen(3000, () => console.log("App started on port 3000"))
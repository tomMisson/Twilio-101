// Use dotenv to allow us to have a file that store our keys without making them publicly avalible
require('dotenv').config();
const express = require('express')
const client = require('twilio')(process.env.SID, process.env.AUTH_TOKEN);
const app = express()

var today = new Date();
var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

app.get('/sms', function (req, res) {
    const twiml = new MessagingResponse();

    console.log(req.body.Body);

    if(req.body.Body === 'Whats the time?' || req.body.Body === 'time')
    {
        twiml.message('The current time is: ' + time);
        res.writeHead(200, {'Content-Type': 'text/xml'});
        res.end(twiml.toString()); 
    }
    else{
        twiml.message('');
        res.writeHead(200, {'Content-Type': 'text/xml'});
        res.end(twiml.toString());
    }
})

app.listen(3000, () => console.log("App started on port 3000"))
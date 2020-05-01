const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sendGrid = require('@sendGrid/mail');


const app = express();


app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Change later to only allow our server
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.get('/api', (req, res, next) => {
    res.send('API Status: yes I\'m running i am yuh yuh ;)')
});


app.post('/api/email', (req, res, next) => {
      
    console.log('-----------------------------------');
    console.log(req.body);
    
    sendGrid.setApiKey('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');  
    const msg = {
        to: 'ykelk002@gmail.com',
        from: req.body.email,
        subject: 'Website Portfolio Contact',
        text: req.body.message
    }
    console.log(msg);
    sendGrid.send(msg)
        .then(result => {

            res.status(200).json({
                success: true
            });

        })
        .catch(err => {

            console.log('error: ', err);
            res.status(401).json({
                success: false
            });

        });
});


app.listen(3030, '0.0.0.0');
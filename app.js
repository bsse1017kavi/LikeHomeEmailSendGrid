const sgMail = require('@sendgrid/mail');

const API_KEY = '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';

sgMail.setApiKey(API_KEY);

const message = {
    'to': 'ahmedulkavi@gmail.com',
    'from': 'bsse1017@iit.du.ac.bd',
    'subject': 'From sendgrid',
    'text': 'Welcome',
    'html': '<h1>Hello</h1>'
}

var express = require('express');
var app = express();

//app.get('/sendMail', sendMail)

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json())

app.post("/sendMail",  (req, res) => {
    //let email = req.body.email;
    let email = req.query.email;
    message['to'] = email;
    
    sgMail
    .send(message)
    .then((response) => {
        res.status(200).send();
    })
    .catch((error) =>{
        res.status(400).send();
    });
    //.catch((error) => console.log('Something wrong'))
    });


//sendMail('syedahmedul@gmail.com')

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
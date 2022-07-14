const express = require('express');
const path = require('path');
const app = express();
require('./../database/db');
const Model = require('./../database/userTable');
const staticPath = path.join(__dirname, "../public");

app.use(express.static(staticPath));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.send('index')
});

app.post('/', async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        // console.log(username);
        // console.log(password);
        const result = await Model.find({username : username});
        if(result.length === 0){
            const document = new Model({
                username : username,
                password : password
            });
            const insertion =  await document.save();
            res.render('thanks', {
                username : username
            })
        }
        else{
            res.render('username', {
                name : username,
            });
        }
    }catch(error){
        console.log(error);
    }
})
app.listen(8000, () => {
    console.log('ready to go');
})
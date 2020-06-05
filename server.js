const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 9191;
const userManager = require('./src/userManager');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.post('/addUser', (req, res) => {
    try {
        let result = userManager.addUser(req.body.user);
        res.json({status: 200, effected: result})
    } catch (error) {
        res.json({status: 400, error})
    }

});

app.post('/getAll', (req, res) => {
    let result = userManager.getAllUsers();
    res.json({status: 200,users:result});
});

app.post('/deleteUser', (req, res) => {
    let result = userManager.removeUser(req.body.userId);
    res.json({status: 200});
});


app.listen(PORT, () => {
    console.log(' Running on http://localhost:9191')

});

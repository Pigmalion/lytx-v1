const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 9191;
const URL = process.env.URL || 'localhost';
const userController = require('./src/userController');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.post('/addUser', async (req, res) => {
    try {
        let result = await userController.addUser(req.body.user);
        await res.json({status: 200, effected: result})
    } catch (error) {
       await res.json({status: 400, error:error.message})
    }

});

app.post('/getAll',async (req, res) => {
    try {
        let result = await userController.getAllUsers();
        await res.json({status: 200, users: result,});
    }catch (error) {
        await res.json({status:400,error:error.message})
    }
});

app.post('/deleteUser', async (req, res) => {
    try {
        let result = await userController.removeUser(req.body.userId);
        if(result == 0 ){
            await res.json({status: 304, result});
        }else{
            await res.json({status: 200, result});
        }
    }catch (error) {
        await res.json({status: 400, error:error.message})
    }
});


app.listen(PORT, () => {
    console.log(` Running on http://${URL}:9191`)

});

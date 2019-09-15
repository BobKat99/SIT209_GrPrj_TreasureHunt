const express = require('express');
const Store = require('./models/store');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-RequestedWith, Content-Type, Accept");
    next();
   });  

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json()) 
   
app.use(express.static(`${__dirname}/public`));

app.listen(port, () => {
 console.log(`listening on port ${port}`);
    console.log(`listening on port ${port}`); 
 console.log(`listening on port ${port}`);
});

app.post('/api/authenticate', (req, res) => {   
    const { name, password } = req.body;

    Store.findOne({name, password}, (err, stores) => {     
        if (err == true) return res.send(err);
        else if (stores == undefined) return res.send('store does not exist');
        else return res.json({
            success: true,
            message: 'authenicated successfully'
        });
    }); 
});

app.post('/api/registration', (req, res) => {  
    const { name, password} = req.body;
    Store.findOne({name, password}, (err, stores) => {
        if (err == true) return res.send(err);
        else if (stores == undefined) 
        {
        const newStore = new Store({
            name,
            password
           });
    
        newStore.save(err => {
            return err
                ? res.send(err)
                : res.json({
                success: true,
                message: 'Created new store'
                });
        });  
    }
        else return res.send('Store already existed')
    }); 
    
      
});

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
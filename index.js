const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors')
const chefInfo = require('./data/chefInfo.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('DishDash Server runniang')
});

app.get('/chef',(req,res)=>{
    res.send(chefInfo)
})

app.get('/chef/:id',(req,res)=>{
    const id = req.params.id;
    const singleChef = chefInfo.find(chef=>chef.id == id);
    res.send(singleChef)
})

app.listen(port, () => {
    console.log('disdash running', port)
})
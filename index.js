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

app.listen(port, () => {
    console.log('disdash running', port)
})
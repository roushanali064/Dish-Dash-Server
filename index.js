const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
    res.send('DishDash Server runniang')
});

app.listen(port, () => {
    console.log('disdash running', port)
})
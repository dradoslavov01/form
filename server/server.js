const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());
const port = 4000;

const schema = mongoose.Schema({
    number: String
})

const Number = mongoose.model('Number', schema);

app.post('/nums', (req, res) => {
    const value = req.body.value;

    const postNumber = new Number({
        number: value
    })
    postNumber.save();
})

app.get('/calc', async (req, res) => {
    const nums = await Number.find({});
    res.send(nums.reverse());
})

mongoose.connect('mongodb+srv://dani:dani123asd@e-commerce.wt1gm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => console.log("Connected to database!"))


app.listen(port, () => console.log(`Server is listening on port ${port}`));
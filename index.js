const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const app = express();
let indexRouter = require('./routes/index.route');



// initialize environment
dotenv.config();

// connect to mongo DB
//  mongoose.connect(process.env.MONGO_URL)
//  .then(()=> console.log("connected to mongoDB"))
//  .catch(err =>console.error("mongoDB connection Error", err))


app.use(cors({
    origin:'http://localhost:4200'
}))
app.use(bodyParser.json());

//mediator
app.use((req, res, next) => {
    next()
})

app.use('/server', (req, res) => {
    res.send("Hello World");
})

app.use(express.static('public'))
app.use('/',indexRouter);


const port = process.env.port || 3000
app.listen(port, ()=>{
    console.log(`server is running on port 3 ${port}`);
    
})







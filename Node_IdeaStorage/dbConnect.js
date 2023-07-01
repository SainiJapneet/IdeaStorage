const mongoose = require('mongoose');
require('dotenv').config();
const dbString = process.env.DB_URL
console.log("Connected successfully : " + dbString);

async function dbConnect(){
    mongoose.connect(dbString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log("Connected to DB")
    }).catch((err)=>{
        console.log("Unable to establish connection with DB");
        console.log("ERROR : " + err)
    })
}

module.exports = dbConnect;
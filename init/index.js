const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

async function main(){
    await  mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
} 
main().then(()=>{
    console.log("Connected to db")
}).catch((err)=>{
    console.log(err)
})

const initDB = async ()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj, owner:'679586537ce8aeae816e7588'}));
    await Listing.insertMany(initData.data);
    console.log("Data was initailized");
};

initDB();
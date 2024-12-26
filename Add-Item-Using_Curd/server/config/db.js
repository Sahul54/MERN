const mongoose = require("mongoose");

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB is connected sucessfully");
        
    }
    catch(error){
        console.log(error.message);
        process.exit(1);
    }
    
};

module.exports = connectDB;
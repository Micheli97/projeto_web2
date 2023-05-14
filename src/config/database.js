const { default: mongoose } = require("mongoose");
const mogoose = require("mongoose");

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.DB_URI,{
            useUnifiedTopology: true,
        })
        console.log(`MongoDB connected:  ${connection.connection.host}`)
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(i);
        
    }
}


module.exports = connectDB;
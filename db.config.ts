import mongoose from 'mongoose';
const { DB_HOST, DB_PORT, DB_NAME } = process.env;
const URI = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

const connectToDb = () => {
    console.log("URI",URI)
    mongoose.connect(URI);
    // mongoose.set('useNewUrlParser', true);
    // mongoose.set('useFindAndModify', false);
    // mongoose.set('useCreateIndex', true);
    mongoose.connection.on("connected", async () => {
        console.log("connected to MongoDb");
    });
    mongoose.connection.on("error", (error) => {
        console.log(error);
    });
}

export default connectToDb;
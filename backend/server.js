import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_DB_URL)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err))


app.use('/api/user', userRouter);

app.listen(process.env.PORT, () => {
    console.log(`server is running on PORT: ${process.env.PORT}`)
});
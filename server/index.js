import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

// init app
const app = express();


// general setups
app.use(bodyParser.json({limit: "30mb", extented:true}));
app.use(bodyParser.urlencoded({limit: "30mb", extented:true}));
app.use(cors());
app.use('/posts', postRoutes);

// connect server app to db
const CONNECTION_URL = 'mongodb+srv://firstmernproject:firstmernproject123@cluster0.yjs3b.mongodb.net/<dbname>?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true})
// successfull :
.then(()=> app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
// fail : 
.catch((error)=> console.log(error.message) );
mongoose.set('useFindAndModify', false);
// https://www.mongodb.com/cloud/atlas



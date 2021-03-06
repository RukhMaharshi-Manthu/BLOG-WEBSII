import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
//for images


//components
import Connection from './database/db.js';
import Router from './routes/route.js';


dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);


const PORT = process.env.PORT || 8000;
//const username = Maharshi;
//const password = Maharshi09;

Connection();
app.get('/', (req, res) => {
    res.send("GET Request Called from index")
  })

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
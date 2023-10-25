const express  = require('express');
const db = require('./dbConnect');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const authRouter = require('./routers/authRouter');
const app = express();
dotenv.config();

const corsOptions ={
  origin:['http://localhost:5173'], 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan('common'));
app.use(cookieParser());    
app.use('/auth', authRouter);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/test', (req, res) => {
  res.status(200).send('Hello World!');
});

db();
app.listen(8080, () => {
  console.log('App listening on port 8080!');
});


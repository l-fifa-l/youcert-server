// These lines make "require" available
import { createRequire } from 'module';
// const require = createRequire(import.meta.url);
import express from 'express';
import cors from 'cors';
import { readdirSync } from 'fs';
// import morgan from 'morgan';
const morgan = require('morgan');
import mongoose from 'mongoose';
// import dotenv from 'dotenv';
const dotenv = require('dotenv');
import csrf from 'csurf';
import cookieParser from 'cookie-parser';
dotenv.config();

const csrfProtection = csrf({ cookie: true });

//middleware
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

// database connection

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB Connected'))
  .catch((err) => console.log('DB Connection rror'));

//routes
// readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)));
app.use('/api', require('./routes/course.js'));
app.use('/api', require('./routes/auth.js'));

//csrf
app.use(csrfProtection);

app.get('/api/csrf-token', (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

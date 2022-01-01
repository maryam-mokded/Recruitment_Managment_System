const express = require('express');
const mongoose = require('mongoose');

// const courseRouter = require('./routes/courses');
const userRouter = require('./routes/users');

const offerRouter = require('./routes/offers');

const interviewRouter = require('./routes/interviews');
const questionRouter = require('./routes/questions');
const cvRouter = require('./routes/cv');
const competanceRouter = require('./routes/competance');
const contactRouter = require('./routes/contact');
const questionnaireRouter = require('./routes/questionnaire');
const condidatRouter = require('./routes/condidat');

const app = express();

mongoose.connect('mongodb://localhost:27017/recrutement',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connected successfully to MongoDB !'))
  .catch(() => console.log('Connection failed to MongoDB !'));

  app.use(express.json());

  app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// app.use('/api/users', courseRouter);
app.use('/api', userRouter);

app.use('/api', offerRouter);
app.use('/api', cvRouter);
app.use('/api', competanceRouter);
app.use('/api', contactRouter);
app.use('/api', questionnaireRouter);

app.use('/api', interviewRouter);
app.use('/api', questionRouter);
app.use('/api', condidatRouter);


module.exports = app;
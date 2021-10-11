const express = require('express');
const app = express();
const port = 80;
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const userRouter = require('./routers/user.js');
const favoriteRouter = require('./routers/favorite.js');


app.use(logger('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: false })); 
app.use(cookieParser())
app.use(cors({
  origin: "",
  methods: ["GET", "POST", "OPTIONS"],
  credentials: true,
  preflightContinue: true
  })
);


app.use('/nod/user', userRouter); 
app.use('/nod', myListRouter);

app.listen(port, () => {
  console.log(`Server listening ${port}`)
})



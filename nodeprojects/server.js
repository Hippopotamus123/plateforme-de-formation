const express = require('express')
const app = express()
const mongoose = require('mongoose');
mongoose.set('strictQuery',false);
var routes=require('./route/routes');
const cors = require ('cors')

app.use(cors(
  {
    origin:"http://localhost:4200"
  }
));
mongoose.connect('mongodb://127.0.0.1:27017/abc', {
 
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(9000, () => {
      console.log('Server started on port 9000');
    });
    console.log('Database connection successful');
  })
  .catch((error) => {
    console.log('Database connection error: ' + error);
  });
  
  app.use(express.json());
  app.use(routes);





 

// Modules 
const http = require('http');
const colors = require('colors');
const mongoose = require('mongoose');

// Files
const app = require('./app');

// Settings
require('dotenv').config({ path: './config/config.env' });
const PORT = process.env.PORT 

// Create Server
const server = http.createServer(app);

// Server Listen
mongoose
   .connect('mongodb://localhost/graphql-db', {
       useCreateIndex: true,
       useNewUrlParser: true,
       useUnifiedTopology: true
   })
   .then(() => {
       app.listen(
           PORT,
           console.log(`Server started at: http://localhost:${PORT}/api/v1/`)
       );
   })
   .catch(console.log);

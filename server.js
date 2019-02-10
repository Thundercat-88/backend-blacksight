var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose'); 
const users = require('./Routes/api/users');
const profile = require('./Routes/api/profile');
const posts = require('./Routes/api/posts');

//DB Config
const db = require('./config/keys').mongoURI
//Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Helo World'));

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

// port to run on
const port = 5001;
//function to listen 
app.listen(port, () =>{
    console.log(`Server started on port ${port}`);
});

//require('./Routes/api/SignIn')(app);

//module.exports = app;
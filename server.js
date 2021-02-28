const express= require('express');
const connectDB = require('./config/db');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const auth = require('./routes/api/auth');
const app= express();

connectDB();

app.use(express.json({extended : false}));

app.get('/',(req,res) => res.send('API Running'));

// define routes
app.use('/api/users',users);
app.use('/api/profile',profile);
app.use('/api/posts',posts);
app.use('/api/auth',auth);

const PORT = 5000 || process.env.PORT;

app.listen(PORT,() => console.log(`Server started on port ${PORT}`));
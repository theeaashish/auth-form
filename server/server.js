require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

const app = express();

// database connection 
connectDB();

//middlewares
app.use(express.json());
app.use(cors());

// routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// app.get('/', (req ,res) => {
//     res.status(200).send('welcome to authentication');
// })

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
})
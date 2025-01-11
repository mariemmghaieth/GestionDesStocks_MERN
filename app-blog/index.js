require('dotenv').config();
const express = require('express');
const database = require('./src/database/db.config');
const cors = require('cors');
const app = express();

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Import routes
const userRoutes = require('./src/api/routes/userRoutes');
const postRoutes = require('./src/api/routes/routes');

// Connect to the database
database.mongoose.connect(database.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to the database');
    })
    .catch(err => {
        console.log('Database connection error:', err);
    });

// Define API routes
app.use('/api', userRoutes);
app.use('/api', postRoutes);

// Root route
app.get('/', (req, res) => {
    res.send({ message: 'Hello from the API' });
});

// Server listens on the port defined in .env or default to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

// dependencies - import => package.json "type": "module"
// ====================================
import express from 'express';

// local modules
import { config, SITE_NAME, PORT } from './config.js'

// variables 
// ===================================
// const PORT = process.env.PORT || 3000;

// express app enviroment
// ===================================
const app = express();

// routes 
// ===================================
app.get('/', (req, res) => {
    res.send(`Hello World ${config.SITE_NAME}`);
});

// listen on server requests
// ===================================
app.listen(PORT, (req, res) => {
    console.log(`Server running on port ${PORT}`)
});
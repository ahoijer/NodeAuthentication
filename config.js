// dotenv 
// ===================================
import dotenv from 'dotenv';

// const PORT = process.env.PORT || 3000;


// test read .env file
// console.log(dotenv.config().parsed);

// read .env content into variable config
const config = dotenv.config().parsed;

const SITE_NAME = config.SITE_NAME;
const PORT = config.PORT;

// NONDMOD?
// const PORT = Number(config.PORT);

export { config, SITE_NAME, PORT };
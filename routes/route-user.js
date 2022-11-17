import express, { Router } from 'express';
import { SITE_NAME } from '../configs.js';

const router = express.Router();

import connectDatabase from '../configurations/mongodb.js'

let db = await connectDatabase();

// render page using ejs
router.get('/', (req, res) => {

    // use ejs method render, takes 2 params
    // param 2 - pass object
    res.render('index', {siter: SITE_NAME});
});


export default router;
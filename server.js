// dependencies - import => package.json "type": "module",
// ========================================
import express from "express";
import session from "express-session";
import path from 'path';

// local modules
// import { config, SITE_NAME, PORT, SESSION_SECRET, SESSION_MAXAGE } from "./configs.js";

// express app environment
// ========================================
const app = express();

app.set('view engine', 'ejs')


// sessions
// ========================================
app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: SESSION_MAXAGE },
    })
);


// routes
// ========================================

// check sessions
// middleware - make sure using next as 3rd argument
app.get('*', (req, res, next) => {

    // oneliner if condition - ternary operator  ? :  ;
    req.session.views ? req.session.views++ : req.session.views = 1;
    
    // show number of times users navigates before session been destroyed
    console.log("req.session.views", req.session.views);

    next();
});


// use local routes ...

import { config, SITE_NAME, PORT, SESSION_SECRET, SESSION_MAXAGE } from "./configs.js"
import routeStart from './routes/route-start.js';

app.get('/', (req, res) => {
    // use ejs methor render, takes 2 params
    res.render('index', {site: SITE_NAME});
})

app.use('/', routeStart);
app.use('/start', routeStart);
app.use('/home', routeStart)

// static files | folders
// ==============================
app.use(express.static('./public'));



// 404 not found 
// ========================================
app.use((req, res, next) => {
    res.status(404).send('Sry - nothing to display');
    next();
});

// 500 server error 
// ======================================== 
app.use((err, req, res, next) => {

    // log server error server-side
    console.log('Error', err);

    res.status(500).send('Server error - please return later');
    next();
})

// listen on server requests
// ========================================
app.listen(PORT, (req, res) => {
    console.log(`Server running on port ${PORT}`);
});
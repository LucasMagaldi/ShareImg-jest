import express, {Router} from 'express';
import app from './app.js';





app.listen(process.env.PORT || 3000, () => {
    console.log("***** RUNNING AT 3000 *****");
})
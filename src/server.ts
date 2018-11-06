'use strict';


// Import everything from express and assign it to the express variable
import express from 'express';
import {HelloRoutes} from "./router/HelloRouter";

// Create a new express application instance
const app: express.Application = express();

// The port the express app will listen on
const port: number = 4500;

// Mount the HelloController at the /welcome route
app.use('/hello', HelloRoutes.index());
app.use('/hello', HelloRoutes.list());

// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});
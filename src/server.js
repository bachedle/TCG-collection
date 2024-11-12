import express from 'express';
import viewEngine from './config/viewEngine.js';
import initWebRoutes from './routes/web.route.js';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connection from './config/connectDB.js';

dotenv.config();

const app = express();

//test connection
connection();

//config view engine
viewEngine(app);
//config body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//init web routes (route khai bao o day, tao file rieng de khai bao route)
initWebRoutes(app);

// handling errors
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    return res.status(404).json({
        message: error.message
    });
});

app.use((error, req, res, next) => {
    const statusCode = error.status || 500
    return res.status(statusCode).json({
        status: 'error',
        code: statusCode,
        message: error.message || 'Internal Server Error'
    })
});

//port
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
export default app;

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

//port
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
export default app;

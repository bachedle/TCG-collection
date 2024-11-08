import express from 'express';
import viewEngine from './config/viewEngine.js';
import initWebRoutes from './routes/web.route.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

//config view engine
viewEngine(app);

//init web routes (route khai bao o day, tao file rieng de khai bao route)
initWebRoutes(app);

//port
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
export default app;

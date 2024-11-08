import express from 'express';
import { getHomePage, getDeckPage } from '../controller/home.controller';
const router = express.Router();

const initWebRoutes = (app) => {

    //mo hinh khai bao router: router.get('path', handler function)
    //day la route mac dinh
    router.get('/home', getHomePage);
    router.get('/deck', getDeckPage);

    //day la route khac
    router.get('/aboutme', (req, res) => {
        res.send('concac2hon');
    });

    return app.use('/', router); //de cho system biet duong dan bat dau
}
export default initWebRoutes;
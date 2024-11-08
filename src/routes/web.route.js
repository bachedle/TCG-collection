import express from 'express';
import homeController from '../controller/home.controller';
const router = express.Router();

const initWebRoutes = (app) => {

    //mo hinh khai bao router: router.get('path', handler function)
    //day la route mac dinh
    router.get('/home', homeController.getHomePage);
    router.get('/deck', homeController.getDeckPage);
    router.post('/home', homeController.registerUser);
    //day la route khac
    router.get('/aboutme', (req, res) => {
        res.send('concac2hon');
    });

    return app.use('/', router); //de cho system biet duong dan bat dau
}
export default initWebRoutes;
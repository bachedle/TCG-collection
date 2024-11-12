import express from 'express';
// import homeController from '../controller/home.controller';
import deckController from '../controller/deck.controller';
import userController from '../controller/user.controller';
import cardController from '../controller/card.controller';
const router = express.Router();

const initWebRoutes = (app) => {

    //mo hinh khai bao router: router.get('path', handler function)
    //day la route mac dinh
    router.get('/home', cardController.getAllCards);
    router.get('/deck', deckController.getDeckPage);
    router.get('/user/register', userController.getRegisterPage);
    router.post('/user/register', userController.registerUser);
    //day la route khac
    router.get('/aboutme', (req, res) => {
        res.send('concac2hon');
    });

    return app.use('/', router); //de cho system biet duong dan bat dau
}
export default initWebRoutes;
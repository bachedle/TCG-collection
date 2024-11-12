import express from 'express';
// import homeController from '../controller/home.controller';
import deckController from '../controller/deck.controller';
import userController from '../controller/user.controller';
import myCollectionController from '../controller/mycollection.controller';
// import cardController from '../controller/card.controller'
const asyncHandler = require('express-async-handler')

const cardController = require('../controller/card.controller');
const router = express.Router();

const initWebRoutes = (app) => {

    //mo hinh khai bao router: router.get('path', handler function)
    //day la route mac dinh
    router.get('/cards', cardController.getAllCards);
    router.get('/decks', deckController.getDeckPage);
    router.get('/users/register', userController.getRegisterPage);
    router.post('/users/register', userController.registerUser);
    router.get('/cards/:id', cardController.getCardById);
    router.post('/users/login', asyncHandler(userController.loginUser));
    router.post('/mycollections', asyncHandler(myCollectionController.addMyCollection));
    router.delete('/mycollections/:cardID/:userID', asyncHandler(myCollectionController.removeCardFromMyCollection))

    //day la route khac
    router.get('/aboutme', (req, res) => {
        res.send('concac2hon');
    });

    return app.use('/', router); //de cho system biet duong dan bat dau
}
export default initWebRoutes;
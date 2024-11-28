// import express from 'express';
// // import homeController from '../controller/home.controller';
// import deckController from '../controller/deck.controller';
// import userController from '../controller/user.controller';
// import myCollectionController from '../controller/mycollection.controller';
// // import cardController from '../controller/card.controller'
// const asyncHandler = require('express-async-handler')

// const cardController = require('../controller/card.controller');
// const router = express.Router();


//     /**
//     * @openapi
//     * '/user':
//     *   get:
//     *     description: my hosted api docs
//     *     summary: api docs
//     *     responses:
//     *       '200':
//     *         description: OK
//     *         content:
//     *           'application/json':
//     *             schema:
//     *               type: object
//     *               properties:
//     *                 thing:
//     *                   $ref: '#/components/schemas/UserAccount'
//     * components:
//     *   schemas:
//     *     UserAccount:
//     *       type: object
//     *       required:
//     *         - username
//     *       properties:
//     *         username:
//     *           type: string
//     */
//     router.get('/user', (req, res) => {

//         res.status('200').json({ "username": "test" })
//     })

// module.exports = router;
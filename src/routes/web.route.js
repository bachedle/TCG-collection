const express = require('express');
// const homeController = require('../controller/home.controller');
const deckController = require('../controller/deck.controller');
const userController = require('../controller/user.controller');
const myCollectionController = require('../controller/mycollection.controller');
// const cardController = require('../controller/card.controller')
const asyncHandler = require('express-async-handler')



const cardController = require('../controller/card.controller');
const mycollectionController = require('../controller/mycollection.controller');
const router = express.Router();


const initWebRoutes = (app) => {

    //mo hinh khai bao router: router.get('path', handler function)


/**
 * @openapi
 * /users/register:
 *   get:
 *     tags:
 *       - User Controller
 *     summary: Get registration page
 *     responses:
 *       200:
 *         description: Registration page rendered successfully
 */
    router.get('/users/register', userController.getRegisterPage);

/**
 * @openapi
 * /users/register:
 *   post:
 *     tags:
 *       - User Controller
 *     summary: Register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userName
 *               - email
 *               - password
 *             properties:
 *               userName:
 *                 type: string
 *                 default: JohnDoe
 *               email:
 *                 type: string
 *                 format: email
 *                 default: john@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 default: secretpassword
 *     responses:
 *       200:
 *         description: User registered successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server Error
 */
    router.post('/users/register', userController.registerUser);

    
/**
 * @openapi
 * /users/login:
 *   post:
 *     tags:
 *       - User Controller
 *     summary: Login user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 default: john@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 default: secretpassword
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Invalid credentials
 *       500:
 *         description: Server Error
 */
    router.post('/users/login', asyncHandler(userController.loginUser));

    /**
 * @openapi
 * /cards:
 *   get:
 *     tags:
 *       - Card Controller
 *     summary: Get all cards
 *     responses:
 *       200:
 *         description: Successfully retrieved all cards
 *       500:
 *         description: Server Error
 */
    router.get('/cards', cardController.getAllCards);
    /**
 * @openapi
 * /cards/{cardID}:
 *   get:
 *     tags:
 *       - Card Controller
 *     summary: Get a card by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved the card
 *       404:
 *         description: Card not found
 *       500:
 *         description: Server Error
 */
    router.get('/cards/:cardID', cardController.getCardById);
    /**
 * @openapi
 * /cards/search:
 *   post:
 *     tags:
 *       - Card Controller
 *     summary: Search for cards by name
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - cardName
 *             properties:
 *               cardName:
 *                 type: string
 *                 default: Black Lotus
 *     responses:
 *       200:
 *         description: Successfully retrieved matching cards
 *       404:
 *         description: No cards found
 *       500:
 *         description: Server Error
 */
    router.post('/cards/search', asyncHandler(cardController.getCardByName));

    /**
 * @openapi
 * /mycollections/add:
 *   post:
 *     tags:
 *       - MyCollection Controller
 *     summary: Add card to user's collection
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userID
 *               - cardID
 *             properties:
 *               userID:
 *                 type: string
 *                 description: User's ID
 *                 default: 1
 *               cardID:
 *                 type: string
 *                 description: Card's ID
 *                 default: 1
 *     responses:
 *       200:
 *         description: Card successfully added to collection
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Server Error
 */
    router.post('/mycollections/add', asyncHandler(myCollectionController.addMyCollection));

    /**
 * @openapi
 * /mycollections/{cardID}/{userID}/delete:
 *   delete:
 *     tags:
 *       - MyCollection Controller
 *     summary: Remove card from user's collection
 *     parameters:
 *       - in: path
 *         name: cardID
 *         required: true
 *         schema:
 *           type: string
 *         description: Card's ID
 *       - in: path
 *         name: userID
 *         required: true
 *         schema:
 *           type: string
 *         description: User's ID
 *     responses:
 *       200:
 *         description: Card successfully removed from collection
 *       400:
 *         description: Bad Request
 *       404:
 *         description: Card or user not found
 *       500:
 *         description: Server Error
 */
    router.delete('/mycollections/:cardID/:userID/delete', asyncHandler(myCollectionController.removeCardFromMyCollection))


    /**
     * @openapi
     * /mycollections/{userID}/yourcards:
     *   get:
     *     tags:
     *       - MyCollection Controller
     *     summary: Get user's card collection
     *     parameters:
     *       - in: path
     *         name: userID
     *         required: true
     *         schema:
     *           type: string
     *         description: User's ID
     *     responses:
     *       200:
     *         description: Successfully retrieved user's card collection
     *       404:
     *         description: User not found
     *       500:
     *         description: Server Error
     */
    router.get('/mycollections/:userID/yourcards', asyncHandler(mycollectionController.getMyCollection))
   /**
 * @openapi
 * /decks:
 *   get:
 *     tags:
 *       - Deck Controller
 *     summary: Get all decks
 *     responses:
 *       200:
 *         description: Successfully retrieved all decks
 *       500:
 *         description: Server Error
 */
    router.get('/decks', asyncHandler(deckController.getAllDeck));
    /**
 * @openapi
 * /decks/{deckID}:
 *   get:
 *     tags:
 *       - Deck Controller
 *     summary: Get a deck by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Deck's ID
 *     responses:
 *       200:
 *         description: Successfully retrieved the deck
 *       404:
 *         description: Deck not found
 *       500:
 *         description: Server Error
 */
    router.get('/decks/:deckID', asyncHandler(deckController.getDeckById));
    /**
 * @openapi
 * /decks/search:
 *   get:
 *     tags:
 *       - Deck Controller
 *     summary: Search for decks by name
 *     parameters:
 *       - in: query
 *         name: deckName
 *         required: true
 *         schema:
 *           type: string
 *         description: Name of the deck to search for
 *     responses:
 *       200:
 *         description: Successfully retrieved matching decks
 *       404:
 *         description: No decks found
 *       500:
 *         description: Server Error
 */
    router.get('/decks/search', asyncHandler(deckController.getDeckByName));
    /**
 * @openapi
 * /decks/create:
 *   post:
 *     tags:
 *       - Deck Controller
 *     summary: Create a new deck
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - deckName
 *               - userID
 *             properties:
 *               deckName:
 *                 type: string
 *                 default: My New Deck
 *               userID:
 *                 type: string
 *                 default: user123
 *     responses:
 *       200:
 *         description: Deck created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server Error
 */
    router.post('/decks/create', asyncHandler(deckController.createDeck));
    /**
 * @openapi
 * /decks/{deckID}/edit:
 *   put:
 *     tags:
 *       - Deck Controller
 *     summary: Update an existing deck
 *     parameters:
 *       - in: path
 *         name: deckID
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - deckName
 *             properties:
 *               deckName:
 *                 type: string
 *                 default: Updated Deck Name
 *     responses:
 *       200:
 *         description: Deck updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Deck not found
 *       500:
 *         description: Server Error
 */
    router.put('/decks/:deckID/edit', asyncHandler(deckController.updateDeck));
    /**
 * @openapi
 * /decks/{deckID}/delete:
 *   delete:
 *     tags:
 *       - Deck Controller
 *     summary: Delete a deck
 *     parameters:
 *       - in: path
 *         name: deckID
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the deck to delete
 *     responses:
 *       200:
 *         description: Deck deleted successfully
 *       404:
 *         description: Deck not found
 *       500:
 *         description: Server Error
 */
    router.delete('/decks/:deckID/delete', asyncHandler(deckController.deleteDeck));
/**
 * @openapi
 * /decks/cards/add:
 *   post:
 *     tags:
 *       - Deck Controller
 *     summary: Add cards to a deck
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - deckID
 *               - listOfCards
 *             properties:
 *               deckID:
 *                 type: string
 *                 default: deck123
 *               listOfCards:
 *                 type: array
 *                 items:
 *                   type: string
 *                 default: ['card1', 'card2']
 *     responses:
 *       200:
 *         description: Cards added to deck successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Deck not found
 *       500:
 *         description: Server Error
 */
    router.post('/decks/cards/add', asyncHandler(deckController.addCardToDeck));
   /**
 * @openapi
 * /decks/cards/remove:
 *   delete:
 *     tags:
 *       - Deck Controller
 *     summary: Remove cards from a deck
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - deckID
 *               - listOfCards
 *             properties:
 *               deckID:
 *                 type: string
 *                 default: deck123
 *               listOfCards:
 *                 type: array
 *                 items:
 *                   type: string
 *                 default: ['card1', 'card2']
 *     responses:
 *       200:
 *         description: Cards removed from deck successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Deck or cards not found
 *       500:
 *         description: Server Error
 */
    router.delete('/decks/cards/remove', asyncHandler(deckController.removeCardFromDeck));

    return app.use('/', router); //de cho system biet duong dan bat dau
}
module.exports = initWebRoutes;
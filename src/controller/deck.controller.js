// const deckService = require('../service/deck.service');
const DeckService = require('../service/deck.service');

// const getDeckPage = async(req, res) => {
//     const listOfCards = req.body.listOfCards;
//     const deckID = req.body.deckID;
//     await DeckService.getDeckPage(listOfCards, deckID);
//     res.send('deck page');
// }
const getAllDeck = async (req, res) => {
    let decks = await DeckService.getAllDeck();
    res.json(decks);
}
const getDeckById = async (req, res) => {
    let decks = await DeckService.getDeckById(req.params.id);
    res.json(decks);
}
const getDeckByName = async (req,res) => {
    let decks = await DeckService.getDeckByName(req.body.deckName);
    res.json(decks);
}
const createDeck = async (req, res) => {
    const deckName = req.body.deckName;
    const userID = req.body.userID; 
    return res.json(await DeckService.createDeck(deckName, userID));
}
const deleteDeck = async (req, res) => {
    const deckID = req.params.deckID;
    await DeckService.deleteDeck(deckID);
    res.send('delete deck success');
}
const addCardToDeck = async (req, res) => {
    const deckID = req.body.deckID;
    const listOfCards = req.body.listOfCards;
    return res.json(await DeckService.addCardToDeck(deckID, listOfCards));
}
const removeCardFromDeck = async (req, res) => {
    const deckID = req.body.deckID;
    const listOfCards = req.body.listOfCards;
    return res.json(await DeckService.removeCardFromDeck(deckID, listOfCards));
}
const updateDeck = async (req, res) => {
    const deckName = req.body.deckName;
    const deckID = req.params.deckID;
    return res.json(await DeckService.updateDeck(deckName, deckID));
}

module.exports = {
    // getDeckPage: getDeckPage,
    getAllDeck: getAllDeck,
    getDeckById: getDeckById,
    getDeckByName: getDeckByName,
    createDeck: createDeck,
    deleteDeck: deleteDeck,
    addCardToDeck: addCardToDeck,
    removeCardFromDeck: removeCardFromDeck,
    updateDeck: updateDeck
}
const DeckService = require('../service/deck.service');

// const getDeckPage = async(req, res) => {
//     const listOfCards = req.body.listOfCards;
//     const deckID = req.body.deckID;
//     await DeckService.getDeckPage(listOfCards, deckID);
//     res.send('deck page');
// }
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
    return res.json(await DeckService.updateDeck(deckName, deckID),'update done');
}

module.exports = {
    // getDeckPage: getDeckPage,
    createDeck: createDeck,
    deleteDeck: deleteDeck,
    addCardToDeck: addCardToDeck,
    removeCardFromDeck: removeCardFromDeck,
    updateDeck: updateDeck
}
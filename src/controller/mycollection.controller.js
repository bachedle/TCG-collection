const myCollectionService = require('../service/mycollection.service');

const addMyCollection = async (req, res) => {
    let myCollection = await myCollectionService.addMyCollection(req.body.userID, req.body.cardID);
    res.json(myCollection);
}

const removeCardFromMyCollection = async (req, res) => {
    let myCollection = await myCollectionService.removeCardFromMyCollection(req.params.userID, req.params.cardID);
    res.json(myCollection);
}

module.exports = {
    addMyCollection: addMyCollection,
    removeCardFromMyCollection: removeCardFromMyCollection
}
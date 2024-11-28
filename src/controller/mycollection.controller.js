const myCollectionService = require('../service/mycollection.service');

const addMyCollection = async (req, res) => {
    console.log(req.body)
    let myCollection = await myCollectionService.addMyCollection(req.body.userID, req.body.cardID);
    res.json(myCollection);
}

const removeCardFromMyCollection = async (req, res) => {
    let myCollection = await myCollectionService.removeCardFromMyCollection(req.params.userID, req.params.cardID);
    res.json(myCollection);
}

const getMyCollection = async (req,res) => {
    console.log('userID', req.params.userID)
    let cards = await myCollectionService.getMyCollection( req.params.userID);
    res.json(cards);
}
module.exports = {
    addMyCollection: addMyCollection,
    removeCardFromMyCollection: removeCardFromMyCollection,
    getMyCollection: getMyCollection
}
import cardService from '../service/card.service';


const getCardPage = (req, res) => {
    res.render('card.ejs');
}

const getAllCards = async (req, res) => {
    let cards = await cardService.getAllCards();
    res.json(cards);
}

const getCardById = async (req, res) => {
    let card = await cardService.getCardById(req.params.id);
    res.json(card);
}   

module.exports = {
    getCardPage: getCardPage,
    getAllCards: getAllCards,
    getCardById: getCardById
}

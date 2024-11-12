import cardService from '../service/card.service';

const getCardPage = (req, res) => {
    res.render('card.ejs');
}

const getAllCards = async (req, res) => {
    let cards = await cardService.getAllCards();
    res.json(cards);
}

module.exports = {
    getCardPage: getCardPage,
    getAllCards: getAllCards
}

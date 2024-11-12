const Card = require('../models/card.model');

class CardService {
    
    async getAllCards() {
        try {
            const cards = await Card.findAll({
                raw: true,
                nest: true
            });
            return cards;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = new CardService();


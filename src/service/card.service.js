const db = require('../models');

class CardService {
    
    async getAllCards() {
        try {
            const cards = await db.card.findAll();
            return cards;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getCardById(id) {
        const card = await db.card.findByPk(id);
        return card;
    }
}

module.exports = new CardService();


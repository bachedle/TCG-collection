const db = require('../models');
const { Op } = require('sequelize');

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

    async getCardByName(cardName) {
        const cards = await db.card.findAll({
            where: {
                cardName: {
                    [Op.like]: `%${cardName}%`
                }
            }
        })
        return cards;
    }

}

module.exports = new CardService();


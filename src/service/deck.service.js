//card in deck
const db = require('../models');
// listOfCards = [{cardID: 1, cardquantity: 1}, {cardID: 2, cardquantity: 2}]
class DeckService {
     addCardToDeck = async (deckID, listOfCards) =>
        {
       
            //bao vo 1 vong lap listOfCards
            for (const deckItem of listOfCards)
            {
                console.log(deckItem);
                //tim deck
                const deck = await db.deck.findOne({ where: { id: deckID } });
                if (!deck) {
                  throw new Error("card not found");
                }
        
                const card = await db.card.findOne({
                    where: {
                      id: deckItem.cardID,
                    },
                  });
              
                  if (!card) {
                    throw new Error("card not found");
                }
                
                const [deckdetailItem, created] = await db.deckdetail.findOrCreate({  //tim khong thay trong collection thi tao moi, created = true
                  where: {
                    deckID: deckID, cardID: deckItem.cardID
                  },
                  defaults: {
                    deckID: deckID, cardID: deckItem.cardID, cardquantity: deckItem.cardquantity
                  },
                });
            
                if (!created) {
                  deckdetailItem.cardquantity += deckItem.cardquantity;
                  await deckdetailItem.save();
    
                }
                // update deck quantity + cardquantity
                deck.quantity += deckItem.cardquantity;
                await deck.save();
                // save
             
            };   
            return '2hdai';
        }
            
        
         removeCardFromDeck = async (deckID, listOfCards) => 
        {
            //vua lap vua addd
            // lap roi check -> error, bao loi FE
            // lap lan nua de remove
    
            //vua lap vua remove, -> error cai thu 4, xoa 3cai dau, cai 4 loi k xoa dc, -> bao loi fe, fe gui lai, 3
            for (const deckItem of listOfCards)   
            {
                const deck = await db.deck.findOne({ where: { id: deckID } });
                if (!deck) {
                  throw new Error("card not found");
                }
                const card = await db.card.findOne({
                    where: {
                      id: deckItem.cardID,
                    },
                  });
              
                  if (!card) {
                    throw new Error("card not found");
                }
        
                const deckdetailItem = await db.deckdetail.findOne({
                    where: {
                        cardID: deckItem.cardID, deckID: deckID
                    },
                });
        
                if(deckdetailItem == null)
                {
                    throw new Error("Card not found in deck");
                }
                if(deckdetailItem.cardquantity === 1)
                {
                    await db.deckdetail.destroy({
                        where: {
                            cardID: deckItem.cardID, deckID: deckID
                        },
                    });
                    return "Delete success";
                }
                else 
                {
                    deckdetailItem.cardquantity -= deckItem.cardquantity;
                    await deckdetailItem.save();
                }
                //tim thang deck bang deckID
                // update deck quantity -1
                deck.quantity -= deckItem.cardquantity;
                await deck.save();
                // save
                return deckdetailItem;
            };
        }
    
    //deck detail
     createDeck = async (deckName, userID) => {
        return await db.deck.create({
            deckName: deckName,
            userID: userID,
            quantity: 0
        });
    }
    
     updateDeck = async (deckName, deckID) => {
        return await db.deck.update({
            deckName: deckName
        }, {
            where: { id: deckID }
        });
    }
    
     deleteDeck = async (deckID) => {
        return await db.deck.destroy({
            where: { id: deckID }
        });
    } 
}



module.exports = new DeckService();


import db from '../models';

const addMyCollection = async (userID, cardID) =>
{
        const user = await db.user.findOne({ id: userID });
        if (!user) {
          throw new Error("User not found");
        }
        const card = await db.card.findOne({
            where: {
              id: cardID,
            },
          });
      
          if (!card) {
            throw new Error("card not found");
        }
        
        const [myCollectionItem, created] = await db.mycollection.findOrCreate({  //tim khong thay trong collection thi tao moi, created = true
          where: {
            cardID: cardID, userID: userID
          },
          defaults: {
            cardID: cardID, userID: userID, quantity: 1
          },
        });
    
        if (!created) {
          myCollectionItem.quantity += 1;
          await myCollectionItem.save();
        }
        return myCollectionItem;
      };
    

const removeCardFromMyCollection = async (userID, cardID) => 
{
    const user = await db.user.findOne({ id: userID });
        if (!user) {
          throw new Error("User not found");
        }
        const card = await db.card.findOne({
            where: {
              id: cardID,
            },
          });
      
          if (!card) {
            throw new Error("card not found");
        }

        const myCollectionItem = await db.mycollection.findOne({
            where: {
                cardID: cardID, userID: userID
            },
        });

        if(myCollectionItem == null)
        {
            throw new Error("Card not found in my collection");
        }
        if(myCollectionItem.quantity === 1)
        {
            await db.mycollection.destroy({
                where: {
                    cardID: cardID, userID: userID
                },
            });
            return "Delete success";
        }
        else 
        {
            myCollectionItem.quantity -= 1;
            await myCollectionItem.save();
        }
        return myCollectionItem;
}

module.exports = {
    addMyCollection: addMyCollection,
    removeCardFromMyCollection: removeCardFromMyCollection
}

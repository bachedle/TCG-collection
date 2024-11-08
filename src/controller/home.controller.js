const getHomePage = (req, res) => {
    //tham so va function o day
    res.send('homepage');
}

const getDeckPage = (req, res) => {
    //tham so va function o day
    res.send('deckpage');
}
module.exports = {
    getHomePage: getHomePage,
    getDeckPage: getDeckPage
}

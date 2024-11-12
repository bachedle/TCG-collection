const getDeckPage = (req, res) => {
    res.render('deck.ejs');
}

module.exports = {
    getDeckPage: getDeckPage
}
import userService from '../service/user.service';

const getHomePage = (req, res) => {
    //tham so va function o day
    res.render('user.ejs');
}

const getDeckPage = (req, res) => {
    //tham so va function o day
    res.send('deckpage');
}

const registerUser = (req, res) => {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;

    userService.createNewUser(username, email, password);

    return res.send('register success');
}
module.exports = {
    getHomePage: getHomePage,
    getDeckPage: getDeckPage,
    registerUser: registerUser
}

import userService from '../service/user.service';

const getRegisterPage = (req, res) => {
    res.render('user.ejs');
}

const registerUser = (req, res) => {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;

    userService.createNewUser(username, email, password);

    return res.send('register success');
}

module.exports = {
    getRegisterPage: getRegisterPage,
    registerUser: registerUser
}
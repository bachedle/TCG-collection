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


const loginUser = (req, res) =>
{
    let email = req.body.email;
    let password = req.body.password;

    userService.loginUser(email, password);

    return res.send('login success');
}
module.exports = {
    getRegisterPage: getRegisterPage,
    registerUser: registerUser,
    loginUser: loginUser
}
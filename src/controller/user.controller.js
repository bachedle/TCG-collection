const userService = require('../service/user.service');

const getRegisterPage = (req, res) => {
    res.render('user.ejs');
}

const registerUser = async (req, res) => {
    let userName = req.body.userName;
    let email = req.body.email;
    let password = req.body.password;

    await userService.createNewUser(userName, email, password);

    return res.send('register success');
}


const loginUser = async (req, res) =>
{
    let email = req.body.email;
    let password = req.body.password;
    console.log('Email', email);
    console.log('Password', password);
    

    const user = await userService.loginUser(email, password);
    return res.json(user);
}
module.exports = {
    getRegisterPage: getRegisterPage,
    registerUser: registerUser,
    loginUser: loginUser
}
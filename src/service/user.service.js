import bcrypt from 'bcrypt';
const salt = bcrypt.genSaltSync(10);

// create the connection to database
const db = require('../models');

//ham hash password
const hashUserPassword = (userPassword) => {
    return bcrypt.hashSync(userPassword, salt);
}

const createNewUser = (userName, email, password) => {
    let hashPassword = hashUserPassword(password);

    return db.User.create({
        userName: userName,
        email: email,
        password: hashPassword
    });
}

const loginUser = (email, password) => {
    let user = db.User.findOne({
        where: { email: email }
    });

    if (user === null) 
    {
        throw new Error('User not found');
    }
    else 
    {   
        if(hashUserPassword(password, salt) != user.password)
        {
            throw new Error('Password is incorrect');
        }
        else 
        {
            return true;
        }
    }
}

module.exports = {
    createNewUser: createNewUser,
    loginUser: loginUser

}



import bcrypt from 'bcrypt';
const salt = bcrypt.genSaltSync(10);

// create the connection to database
const db = require('../models');

//ham hash password
const hashUserPassword = (userPassword) => {
    return bcrypt.hashSync(userPassword, salt);
}

const createNewUser = async (userName, email, password) => {
    let hashPassword = hashUserPassword(password);
    console.log('hashPassword', hashPassword);
    console.log('userName', userName);
    console.log('email', email);
    return await db.user.create({
            userName: userName,
            email: email,
            password: hashPassword
    });
}

const loginUser = async (email, password) => {
    let user = await db.user.findOne({
        where: { email: email }
    });
    console.log('user', user);

    if (user === null) 
    {
        throw new Error('User not found');
    }
    if(hashUserPassword(password, salt) != user.password)
        {
           console.log('Password',hashUserPassword(password, salt));
           console.log('User password', user.password);
           throw new Error('Password is incorrect');
        }
    return true;
    // else 
    // {   
    //     // if(hashUserPassword(password, salt) != user.password)
    //     // {
    //     //    console.log('Password',hashUserPassword(password, salt));
    //     //    console.log('User password', user.password);
    //     //    throw new Error('Password is incorrect');
    //     // }
    //     // else 
    //     // {
    //     //     console.log('Password',hashUserPassword(password, salt));
    //     //    console.log('User password', user.password);
    //     //     return true;
    //     // }
    // }
}

module.exports = {
    createNewUser: createNewUser,
    loginUser: loginUser

}



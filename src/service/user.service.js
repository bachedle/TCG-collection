const bcrypt = require('bcrypt');
// const salt = bcrypt.genSaltSync(10);

// create the connection to database
const db = require('../models');

//ham hash password
const hashUserPassword = async (userPassword) => {
    return await bcrypt.hash(userPassword, 10);
}

const createNewUser = async (userName, email, password) => {
    let hashPassword = await hashUserPassword(password);
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
    const result = await bcrypt.compare(password, user.password);
    if(!result)
        {s
           throw new Error('Password is incorrect');
        }
    return {
        userID : user.id,
        username : user.userName
    };
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


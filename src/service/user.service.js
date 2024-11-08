import bcrypt from 'bcrypt';
import mysql from 'mysql2';
const salt = bcrypt.genSaltSync(10);

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'tcg_test'
});
//ham hash password
const hashUserPassword = (userPassword) => {
    return bcrypt.hashSync(userPassword, salt);
}

const createNewUser = (username, email, password) => {
    let hashPassword = hashUserPassword(password);

    connection.query(
        `insert into users (username, email, password) values ('${username}', '${email}', '${hashPassword}')`,
        function(err, results, fields) {
            console.log(results);
            if (err) {
                console.log(err);
            }
        }
    );
}

module.exports = {
    createNewUser: createNewUser
}



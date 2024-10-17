const client = require('../utils/conn');
const jwt = require('jsonwebtoken');
const path = require('path')
// const Authenticate = require('../utils/Authenticate');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const nodeCache = require('node-cache');
const LoginModel = (user_mail, user_password) => {
    const cache = new nodeCache();
    return new Promise((resolve, reject) => {
        client.query('SELECT * FROM user_data WHERE user_mail=$1 AND user_password=$2',
        [user_mail, user_password],
        (error, result)=> {
            if (error) 
            {
                reject(error);
            }
            else
            {
                if(result.rows.length > 0)
                {
                    let role = result.rows[0].user_role;
                    let department = result.rows[0].user_department;
                    let token_data = role + '' + user_mail
                    const accessToken = jwt.sign({user_mail}, '7df19a06b64a59a7287e5959f315f61fd79ca7fa0a83e8a8c917d37bcf1cc212da5a2686fdd0784e6c1d90e82930ab0bb5adc193eb1ab491a8173b07c4af9a36', {expiresIn: '30m'});
                    resolve({ accessToken: accessToken, id: user_mail, role: role, department: department, status: 'Login Authenticated'});
                    if(result.rows[0].user_role === 2)
                    {
                        resolve({authenticationLevel: "Admin"});
                    }
                    else if(result.rows[0].user_role === 1)
                    {
                        resolve({authenticationLevel: "Finance"});
                    }
                    else if(result.rows[0].user_role === 5)
                    {
                        resolve({authenticationLevel: "student"});
                    }
                    else
                    {
                        resolve({authenticationLevel: "data nil"})
                    }
                }
                else
                {
                    resolve({status: "User_not_found"});
                }
            }
        })
    })
}
module.exports = LoginModel;
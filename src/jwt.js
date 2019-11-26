const jwt = require('jsonwebtoken');
//const secret = 'SECRET';
const config = require('../src/middlewares/config');

const options = {
    //expiresIn: '30 sec'
    //expiresIn: '24h' //24Hr
    expiresIn: 86400 // expires in 24 hours
}

function payloadToJwt(paylaod){
    //return jwt.sign(paylaod, secret, options);
    return jwt.sign(paylaod, config.secret, options);
}

function jwtToPayload(token){
     try {
        //const payload = jwt.verify(token, secret);
        const payload = jwt.verify(token, config.secret);
        return payload;

     } catch ({message}) {
        return false;
     }
}

module.exports = {
    payloadToJwt,
    jwtToPayload
}
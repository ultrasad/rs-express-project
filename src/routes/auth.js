const router = require('express').Router();
const bcrypt = require('bcryptjs');

const User = require('../models/user');

const { payloadToJwt } = require('../jwt');

router.post('/login', async (req, res) => {

    try {

        const user = req.body || {}
        const credential = await User.findOne({
            where: {
                username: user.username
            }
        });

        if(!credential) res.status(404).end();

        const hashPassword = credential.password;
        if(!bcrypt.compareSync(user.password, hashPassword))
            res.status(401).end();

        //res.json(credential);

        const token = payloadToJwt({
            username: credential.username, 
            role: credential.role
        });
        
        res.json({token})

    } catch ({message}) {
        res.json({message})
    }
    res.json({});

})

module.exports = router
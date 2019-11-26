const router = require('express').Router();
const bcrypt = require('bcryptjs');

const User = require('../models/user');

router.post('/', async (req, res) => {

    try {
        const user = req.body || {}
        const hashPassword = bcrypt.hashSync(user.password); //hasSync

        const u = await User.create({...user, password: hashPassword});

        res.json(u);

        //res.json({});

    } catch ({message}) {
        res.json({message});
    }
});


module.exports = router;
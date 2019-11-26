const { jwtToPayload } = require('../jwt');

module.exports = (req, res, next) => {
    console.log('mid jwt call...');
    //res.status(500).end();
    //next();

    try {
        
        const token = req.headers['authorization'];
        if(!token)
            res.status(401).end();

        if(!jwtToPayload(token))
            res.status(403).end();

        console.log("mid jwt header =>", token);
        next();

    } catch ({message}) {
        res.json({message});
    }
}
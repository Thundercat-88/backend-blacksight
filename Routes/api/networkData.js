const express = require('express');
const router = express.Router();


const Network = require('../../Models/Network');

router.get('/', (req, res) => {
    Network.find({})
    .then ((result,error) => { 
        if(error) throw error;
        res.send(result)
    })
    .catch(error => console.error(error))
}
);



module.exports = router;
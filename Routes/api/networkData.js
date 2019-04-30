const express = require('express');
const router = express.Router();


const Network = require('../../Models/Network');

router.get('/', (req, res) => {
    Network.find({})
    .then ((data,error) => { 
        if(error) throw error;
        res.send(data)
    })
    .catch(error => console.error(error))
}
);



module.exports = router;
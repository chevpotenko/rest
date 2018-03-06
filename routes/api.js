const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

router.get('/ninjas', function(req, res) {
    res.send({type: 'GET'});
});

router.post('/ninjas', function(req, res) {
    Ninja.create(req.body).then(function(ninja) {    
        res.send(ninja);
    });
})

module.exports = router;
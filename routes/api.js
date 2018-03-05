const express = require('express');
const router = express.Router();

router.get('/ninjas', function(req, res) {
    res.send({type: 'GET'});
});

router.put('/ninjas', function(req, res) {
    res.send({
        type: 'PUT',
        body: req.body
    });
});

module.exports = router;
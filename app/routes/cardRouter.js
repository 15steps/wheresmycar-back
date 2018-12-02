const { Router } = require('express');
const Card = require('../model/Card');
const router = Router();

router.get('/', (req, res) => {
    try {
        const cards = await Card.find();
        res.json(cards);
    } catch(e) {
        console.log(e);
        res.status(500).json({
            error: 'Error while getting card list'
        });
    }
});

router.get('/:id', (req, res) => {
    try {
        const card = await Card.findById(req.params.id);
        res.json(card);
    } catch(e) {
        console.log(e);
        res.status(500).json({
            error: 'Error while getting card info'
        });
    }
});

router.post('/', (req, res) => {
    try {
        const { token, text } = req.body;
        const card = new Card({
            token,
            text
        });
        res.json(card);
    } catch(e) {
        console.log(e);
        res.json({
            error: 'Error while creating card'
        });
    }
});

router.put('/:id', (req, res) => {
    try {
        const card = Card.findByIdAndUpdate(req.params.id, {
            section: req.body.section
        },
        {new: true});
        res.json(card);
    } catch(e) {
        console.log(e);
        res.json({
            error: 'Error while updating card'
        });
    }
});

router.delete('/:id', (req, res) => {
    try {
        const card = Card.findByIdAndRemove(req.params.id);
        res.json(card);
    } catch(e) {
        console.log(e);
        res.json({
            error: 'Error while deleting card'
        });
    }
});

module.exports = router;
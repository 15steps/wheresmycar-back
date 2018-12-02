const { Router } = require('express');
const Card = require('../model/Card');
const Section = require('../model/Section');

const router = Router();

router.get('/', async (req, res) => {
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

router.get('/:id', async (req, res) => {
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

router.post('/', async (req, res) => {
    try {
        const { token, text } = req.body;
        const card = new Card({
            token,
            text
        });
        await card.save();
        res.json(card);
    } catch(e) {
        console.log(e);
        res.json({
            error: 'Error while creating card'
        });
    }
});

router.put('/:token', async (req, res) => {
    try {
        const { token } = req.params;
        const { sectionCode } = req.body;
        const section = await Section.findOne({code: sectionCode});
            const card = await Card.findOneAndUpdate({token}, {
            token: token,
            section: section._id
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

router.delete('/:id', async (req, res) => {
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
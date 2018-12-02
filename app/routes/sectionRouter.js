const { Router } = require('express');
const Section = require('../model/Section');
const router = Router();

router.get('/', async (req, res) => {
    try {
        const sections = await Section.find();
        res.json(sections);
    } catch(e) {
        console.log(e);
        res.status(500).json({
            error: 'Error while getting list of sections'
        });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const section = await Section.findById(req.params.id);
        res.json(section);
    } catch(e) {
        console.log(e);
        res.status(500).json({
            error: 'Error while getting section'
        });
    }
});

router.post('/', async (req, res) => {
    try {
        const { code, parkingSpots } = req.body;
        const section = new Section({
            code,
            parkingSpots
        });
        await section.save();
        res.json(section);
    } catch(e) {
        console.log(e);
        res.status(500).json({
            error: 'Error while creating section'
        });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { code, parkingSpots } = req.body;
        const newSection = await Section.findByIdAndUpdate(req.params.id, {
            code,
            parkingSpots
        },
        {new: true});
        res.json(newSection);
    } catch(e) {
        console.log(e);
        res.status(200).json({
            error: 'Error while updating section'
        });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const section = await Section.findByIdAndRemove(req.params.id);
        res.json(section);
    } catch(e) {
        console.log(e);
        res.status(500).json({
            error: 'Error while deleting section'
        });
    }
});

module.exports = router;
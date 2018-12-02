const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.json({
        // test: 'SHOW DE TOP'
    });
});

module.exports = router;
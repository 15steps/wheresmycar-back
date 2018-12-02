const { Router } = require('express');

const router = Router();

router.use('/card', require('./cardRouter'));

module.exports = router;
const { Router } = require('express');

const router = Router();
const cardRouter = require('./sectionRouter');

router.use('/card', cardRouter);

module.exports = router;
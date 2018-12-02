const { Router } = require('express');

const router = Router();
const sectionRouter = require('./sectionRouter');
const cardRouter = require('./cardRouter');

router.use('/section', sectionRouter);
router.use('/card', cardRouter);

module.exports = router;
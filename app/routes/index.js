const { Router } = require('express');

const router = Router();
const sectionRouter = require('./sectionRouter');

router.use('/section', sectionRouter);

module.exports = router;
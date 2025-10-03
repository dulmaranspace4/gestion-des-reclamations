const express = require('express');
const claimsRouter = require('./claims');

const router = express.Router();

router.use('/claims', claimsRouter);

module.exports = router;
const express = require('express');
const router = express.Router();
const Claim = require('../models/Claim');

// Route pour créer une réclamation
router.post('/', async (req, res) => {
  const { user, description } = req.body;
  const newClaim = new Claim({ user, description });
  try {
    await newClaim.save();
    res.status(201).json(newClaim);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route pour obtenir toutes les réclamations
router.get('/', async (req, res) => {
  try {
    const claims = await Claim.find();
    res.json(claims);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
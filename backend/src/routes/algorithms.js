import express from 'express';
import Algorithm from '../models/Algorithm.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const algorithms = await Algorithm.find();
    res.json(algorithms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const algorithm = await Algorithm.findOne({ id: req.params.id });
    if (!algorithm) return res.status(404).json({ message: 'Algorithm not found' });
    res.json(algorithm);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;

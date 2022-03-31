import express from 'express';
import {
  getAllTrainers,
  getTrainerById,
  createTrainer,
  updateTrainer,
} from './trainer.controller';

const router = express.Router();

router.get('/', getAllTrainers);
router.get('/:idTrainer', getTrainerById);

router.post('/', createTrainer);
router.put('/:idTrainer', updateTrainer);

export default router;

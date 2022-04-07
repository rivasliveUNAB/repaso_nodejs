import express from 'express';
import {
  getAllTrainers,
  getTrainerById,
  createTrainer,
  updateTrainer,
  deleteTrainer,
} from './trainer.controller';

const router = express.Router();

router.get('/', getAllTrainers);
router.get('/:idTrainer', getTrainerById);

router.post('/', createTrainer);
router.put('/:idTrainer', updateTrainer);
router.delete('/:idTrainer', deleteTrainer);

export default router;

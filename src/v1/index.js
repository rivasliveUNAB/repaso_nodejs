import express from 'express';
import petRoutes from './pet/pet.route';
import trainerRoutes from './trainer/trainer.route';

const router = express.Router();

router.use('/pets', petRoutes);
router.use('/trainers', trainerRoutes);

export default router;

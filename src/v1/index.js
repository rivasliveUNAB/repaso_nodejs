import express from 'express';
import petRoutes from './pet/pet.route';
import trainerRoutes from './trainer/trainer.route';
import vaccinesRoutes from './vaccine/vaccine.route';
import applyVaccinesRoutes from './applyVaccine/applyVaccine.route';

const router = express.Router();

router.use('/pets', petRoutes);
router.use('/trainers', trainerRoutes);
router.use('/vaccines/applies', applyVaccinesRoutes);
router.use('/vaccines', vaccinesRoutes);

export default router;

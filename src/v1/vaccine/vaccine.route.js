import express from 'express';
import {
  getAllVaccine,
  getVaccineById,
  createVaccine,
  deleteVaccine,
  updateVaccine
} from './vaccine.controller';

const router = express.Router();

router.get('/', getAllVaccine);
router.get('/:idVaccine', getVaccineById);

router.post('/', createVaccine);
router.put('/:idVaccine', updateVaccine);
router.delete('/:idVaccine', deleteVaccine);

export default router;

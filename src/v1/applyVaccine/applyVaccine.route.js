import express from 'express';
import {
  getAllApplyVaccine,
  getApplyVaccineById,
  createApplyVaccine,
  updateApplyVaccine,
  deleteApplyVaccine,
} from './applyVaccine.controller';

const router = express.Router();

router.get('/', getAllApplyVaccine);
router.get('/:idApplyVaccine', getApplyVaccineById);

router.post('/', createApplyVaccine);
router.put('/:idApplyVaccine', updateApplyVaccine);
router.delete('/:idApplyVaccine', deleteApplyVaccine);

export default router;

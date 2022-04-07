import express from 'express';
import {
  getAllPets,
  createPet,
  getPetById,
  updatePet,
  deletePet,
} from './pet.controller';

const router = express.Router();

router.get('/', getAllPets);
router.post('/', createPet);

router.get('/:idPet', getPetById);
router.put('/:idPet', updatePet);
router.delete('/:idPet', deletePet);

export default router;

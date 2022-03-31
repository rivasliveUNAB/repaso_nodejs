import express from 'express';
import { getAllPets, createPet, getPetById, updatePet } from './pet.controller';

const router = express.Router();

router.get('/', getAllPets);
router.get('/:idPet', getPetById);
router.post('/', createPet);
router.put('/:idPet', updatePet);

export default router;

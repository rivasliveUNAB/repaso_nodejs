import PetModel from './pet.model';

export const getAllPets = async (req, res) => {
  const { offset, limit } = req.params;

  try {
    const query = PetModel.find({})
      .populate('trainer', ['firstName', 'lastName'])
      .skip(offset)
      .limit(limit);

    const data = await query.exec();
    return res.status(200).json(data);
  } catch (error) {
    throw Error(error);
  }
};

export const getPetById = async (req, res) => {
  const { idPet } = req.params;

  try {
    const query = PetModel.findById(idPet).populate('trainer', [
      'firstName',
      'lastName',
    ]);
    const data = await query.exec();
    return res.status(200).json(data);
  } catch (error) {
    throw Error(error);
  }
};

export const createPet = async (req, res) => {
  const { body } = req;

  if (!body) {
    return res.status(400).json({
      message: 'Hacen faltan campos',
    });
  }

  try {
    const pet = await PetModel.create(body);
    return res.status(200).json(pet);
  } catch (error) {
    throw Error(error);
  }
};

export const updatePet = async (req, res) => {
  const { body, params } = req;
  const { idPet } = params;

  if (!body) {
    return res.status(400).json({
      message: 'Hacen faltan campos',
    });
  }

  try {
    const pet = await PetModel.findOneAndUpdate({ id: idPet }, body);
    return res.status(200).json(Object.assign(pet, body));
  } catch (error) {
    throw Error(error);
  }
};

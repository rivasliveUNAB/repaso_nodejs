import PetModel from './pet.model';

export const getAllPets = async (req, res) => {
  const { offset, limit } = req.params;
  const { status = 'active' } = req.query;

  try {
    const data = await PetModel.find({
      status,
    })
      .populate('trainer', ['firstName', 'lastName'])
      .skip(offset)
      .limit(limit);

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: 'No se pudo recuperar los datos',
    });
  }
};

export const getPetById = async (req, res) => {
  const { idPet } = req.params;

  try {
    const data = await PetModel.findById(idPet).populate('trainer', [
      'firstName',
      'lastName',
    ]);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: 'No se pudo recuperar el registro',
    });
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
    const data = await PetModel.create({
      name: body.name,
      birthdate: body.birthdate,
      race: body.race,
      trainer: body.trainer,
    });
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: 'No se pudo crear el registro',
    });
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
    const data = await PetModel.findOneAndUpdate(
      { _id: idPet },
      {
        name: body.name,
        birthdate: body.birthdate,
        race: body.race,
        trainer: body.trainer,
      }
    );
    return res.status(200).json(Object.assign(data, body));
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: 'No se pudo actualizar el registro',
    });
  }
};

export const deletePet = async (req, res) => {
  const { params } = req;
  const { idPet } = params;

  try {
    const data = await PetModel.findOneAndUpdate(
      { _id: idPet },
      { status: 'inactive' }
    );

    return res.status(200).json({
      ...data,
      status: 'inactive',
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: 'No se pudo eliminar el registro',
    });
  }
};

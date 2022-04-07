import TrainerModel from './trainer.model';

export const getAllTrainers = async (req, res) => {
  const { offset, limit } = req.params;
  const { status = 'active' } = req.query;

  try {
    const data = await TrainerModel.find({ status }).skip(offset).limit(limit);
    return res.status(200).json(data);
  } catch (error) {
    throw Error(error);
  }
};

export const getTrainerById = async (req, res) => {
  const { idTrainer } = req.params;

  try {
    const data = await TrainerModel.findById(idTrainer);
    return res.status(200).json(data);
  } catch (error) {
    throw Error(error);
  }
};

export const createTrainer = async (req, res) => {
  const { body } = req;

  if (!body) {
    return res.status(400).json({
      message: 'Hacen faltan campos',
    });
  }

  try {
    const trainer = await TrainerModel.create(body);
    return res.status(200).json(trainer);
  } catch (error) {
    throw Error(error);
  }
};

export const updateTrainer = async (req, res) => {
  const { body, params } = req;
  const { idTrainer } = params;

  if (!body) {
    return res.status(400).json({
      message: 'Hacen faltan campos',
    });
  }

  try {
    const trainer = await TrainerModel.findOneAndUpdate({ _id: idTrainer }, body);
    return res.status(200).json(Object.assign(trainer, body));
  } catch (error) {
    throw Error(error);
  }
};

export const deleteTrainer = async (req, res) => {
  const { params } = req;
  const { idTrainer } = params;

  try {
    const pet = await TrainerModel.findOneAndUpdate({ _id: idTrainer }, {
      status: 'inactive',
    });
    return res.status(200).json(Object.assign(pet, { status: 'inactive' }));
  } catch (error) {
    throw Error(error);
  }
};

import TrainerModel from './trainer.model';

export const getAllTrainers = async (req, res) => {
  const { offset, limit } = req.params;

  try {
    const query = TrainerModel.find({}).skip(offset).limit(limit);
    const data = await query.exec();
    return res.status(200).json(data);
  } catch (error) {
    throw Error(error);
  }
};

export const getTrainerById = async (req, res) => {
  const { idTrainer } = req.params;

  try {
    const query = TrainerModel.findById(idTrainer);
    const data = await query.exec();
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
    const pet = await TrainerModel.create(body);
    return res.status(200).json(pet);
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
    const pet = await TrainerModel.findOneAndUpdate({ id: idTrainer }, body);
    return res.status(200).json(Object.assign(pet, body));
  } catch (error) {
    throw Error(error);
  }
};

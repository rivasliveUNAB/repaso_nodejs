import TrainerModel from './trainer.model';

export const getAllTrainers = async (req, res) => {
  const { offset, limit } = req.params;
  const { status = 'active' } = req.query;

  try {
    const data = await TrainerModel.find({ status }).skip(offset).limit(limit);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: 'No se pudo obtener los registros',
    });
  }
};

export const getTrainerById = async (req, res) => {
  const { idTrainer } = req.params;

  try {
    const data = await TrainerModel.findById(idTrainer);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: 'No se pudo obtener el registro',
    });
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
    const data = await TrainerModel.create(body);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: 'No se pudo crear el registro',
    });
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
    const data = await TrainerModel.findOneAndUpdate({ _id: idTrainer }, body);
    return res.status(200).json(Object.assign(data, body));
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: 'No se pudo actualizar el registro',
    });
  }
};

export const deleteTrainer = async (req, res) => {
  const { params } = req;
  const { idTrainer } = params;

  try {
    const data = await TrainerModel.findOneAndUpdate({ _id: idTrainer }, {
      status: 'inactive',
    });
    return res.status(200).json(Object.assign(data, { status: 'inactive' }));
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: 'No se pudo eliminar el registro',
    });
  }
};

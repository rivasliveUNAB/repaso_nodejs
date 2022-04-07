import VaccineModel from './vaccine.model';

export const getAllVaccine = async (req, res) => {
  const { offset, limit } = req.params;
  const { status = 'active' } = req.query;

  try {
    const data = await VaccineModel.find({ status }).skip(offset).limit(limit);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: 'No se pudo recuperar los registros',
    });
  }
};

export const getVaccineById = async (req, res) => {
  const { idTrainer } = req.params;

  try {
    const data = await VaccineModel.findById(idTrainer);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: 'No se pudo recuperar el registro',
    });
  }
};

export const createVaccine = async (req, res) => {
  const { body } = req;

  if (!body) {
    return res.status(400).json({
      message: 'Hacen faltan campos',
    });
  }

  try {
    const data = await VaccineModel.create(body);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: 'No se pudo crear el registro',
    });
  }
};

export const updateVaccine = async (req, res) => {
  const { body, params } = req;
  const { idVaccine } = params;

  if (!body) {
    return res.status(400).json({
      message: 'Hacen faltan campos',
    });
  }

  try {
    const data = await VaccineModel.findOneAndUpdate({ _id: idVaccine }, body);
    return res.status(200).json(Object.assign(data, body));
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: 'No se pudo actualizar el registro',
    });
  }
};

export const deleteVaccine = async (req, res) => {
  const { params } = req;
  const { idVaccine } = params;

  try {
    const data = await VaccineModel.findOneAndUpdate({ _id: idVaccine }, {
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

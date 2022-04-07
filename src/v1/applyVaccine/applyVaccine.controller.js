import ApplyVaccineModel from './applyVaccine.model';

export const getAllApplyVaccine = async (req, res) => {
  const { offset, limit } = req.params;
  const { status = 'active' } = req.query;

  try {
    const data = await ApplyVaccineModel.find({ status })
      .skip(offset)
      .limit(limit)
      .populate('pet', ['_id', 'name', 'race'])
      .populate({
        path: 'pet',
        populate: { path: 'trainer', select: ['_id', 'firstName', 'lastName'] },
      })
      .populate('vaccine', ['_id', 'name', 'description', 'effect_secondary']);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      code: 500,
      message: 'Error al recuperar los registro',
    });
  }
};

export const getApplyVaccineById = async (req, res) => {
  const { idApplyVaccine } = req.params;

  try {
    const data = await ApplyVaccineModel.findById(idApplyVaccine);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: 'Error al recuperar el registro',
    });
  }
};

export const createApplyVaccine = async (req, res) => {
  const { body } = req;

  if (!body) {
    return res.status(400).json({
      message: 'Hacen faltan campos',
    });
  }

  try {
    const data = await ApplyVaccineModel.create(body);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: 'Error al crear el registro',
    });
  }
};

export const updateApplyVaccine = async (req, res) => {
  const { body, params } = req;
  const { idApplyVaccine } = params;

  if (!body) {
    return res.status(400).json({
      message: 'Hacen faltan campos',
    });
  }

  try {
    const data = await ApplyVaccineModel.findOneAndUpdate(
      { _id: idApplyVaccine },
      body
    );
    return res.status(200).json(Object.assign(data, body));
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: 'Error al modificar el registro',
    });
  }
};

export const deleteApplyVaccine = async (req, res) => {
  const { params } = req;
  const { idApplyVaccine } = params;

  try {
    const data = await ApplyVaccineModel.findOneAndUpdate(
      { _id: idApplyVaccine },
      {
        status: 'inactive',
      }
    );
    return res.status(200).json(Object.assign(data, { status: 'inactive' }));
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: 'Error al eliminar el registro',
    });
  }
};

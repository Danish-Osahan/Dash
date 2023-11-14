import Dashboard_data from "../models/DashboardModel.js";

export const barData = async (req, res) => {
  try {
    const { fields } = req.query;

    const projection = fields
      ? fields.split(",").reduce((acc, field) => ({ ...acc, [field]: 1 }), {})
      : {};

    console.log(projection);

    const result = await Dashboard_data.find().select(projection);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};

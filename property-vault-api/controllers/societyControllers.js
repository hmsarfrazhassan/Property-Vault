import Society from "../models/society.js";

export const getAllSocieties = async (req, res) => {
  try {
    const allSocieties = await Society.find();
    if (!allSocieties.length) {
      return res
        .status(400)
        .json({ success: false, message: "Data not found" });
    }

    return res
      .status(200)
      .json({ success: true, count: allSocieties.length, data: allSocieties });
  } catch (error) {
    return res.status(404).json({ success: false, message: error.message });
  }
};

export const createSociety = async (req, res) => {
  const { name } = req.body;
  try {
    const society = await Society.find({ name });

    if (society) {
      return res
        .status(404)
        .json({ success: false, message: "Society name already exist." });
    }

    return res.status(201).json({ success: true, data: society });
  } catch (error) {
    return res.status(400).json({ success: false, message: "Data not found" });
  }
};

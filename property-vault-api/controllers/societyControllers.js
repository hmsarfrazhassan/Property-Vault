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

export const addSociety = async (req, res) => {
  try {
    const { name, address } = req.body;
    if (!name && !address) {
      return res.status(400).json({
        success: false,
        message: "Society name and address are required.",
      });
    }

    const society = await Society.findOne({ name });
    if (society) {
      return res
        .status(404)
        .json({ success: false, message: "Society name already exist." });
    }
    const newSociety = await Society.create(req.body);

    return res.status(201).json({ success: true, data: newSociety });
  } catch (error) {
    return res.status(400).json({ success: false, message: "Data not found" });
  }
};

export const getASociety = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Id is required",
      });
    }
    const society = await Society.findById(id);
    if (!society) {
      return res
        .status(404)
        .json({ success: false, message: "Data not found" });
    }
    return res.status(201).json({ success: true, data: society });
  } catch (error) {
    return res.status(400).json({ success: false, message: "Data not found" });
  }
};

export const updateSociety = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, address } = req.body;
    if (!name && !address) {
      return res.status(404).json({
        success: false,
        message: "Society name or address is required to update",
      });
    }
    const isSociety = await Society.findById(id);

    if (!isSociety) {
      return res
        .status(404)
        .json({ success: false, message: "Society not found with id." });
    }
    const updatedSociety = await Society.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
      validators: true,
    });

    return res.status(201).json({ success: true, data: updatedSociety });
  } catch (error) {
    return res.status(400).json({ success: false, message: "Data not found" });
  }
};

export const deleteSociety = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Id is required",
      });
    }
    const society = await Society.findByIdAndDelete(id);

    if (!society) {
      return res
        .status(404)
        .json({ success: false, message: "Data not found" });
    }

    return res
      .status(201)
      .json({ success: true, message: "Society deleted successfully." });
  } catch (error) {
    return res.status(400).json({ success: false, message: "Data not found" });
  }
};

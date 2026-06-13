import express from "express";
import {
  getAllSocieties,
  addSociety,
  getASociety,
  deleteSociety,
  updateSociety,
} from "../controllers/societyControllers.js";
const router = express.Router();

router.route("/").get(getAllSocieties);
router.route("/").post(addSociety);
router.route("/:id").get(getASociety);
router.route("/:id").delete(deleteSociety);
router.route("/:id").put(updateSociety);

export default router;

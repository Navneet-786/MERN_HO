import express from "express";
import {
  deleteAppointment,
  getAllAppointments,
  postAppointment,
  updateAppointmentStatus,
} from "../controller/appointmentController.js";
import {
  isAdminAuthenticated,
  isPatientAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();

router.post("/post", isPatientAuthenticated, postAppointment); //DONE
router.get("/getall", isAdminAuthenticated, getAllAppointments); //DONE
router.put("/update/:id", isAdminAuthenticated, updateAppointmentStatus); //DONE
router.delete("/delete/:id", isAdminAuthenticated, deleteAppointment); //DONE

export default router;

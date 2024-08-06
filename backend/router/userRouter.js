import express from "express";
import {
  addNewAdmin,
  addNewDoctor,
  getAllDoctors,
  getUserDetails,
  login,
  logoutAdmin,
  logoutPatient,
  patientRegister,
  deleteDoctor,
} from "../controller/userController.js";
import {
  isAdminAuthenticated,
  isPatientAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();

router.post("/patient/register", patientRegister); //Done
router.post("/login", login); //done
router.post("/admin/addnew", isAdminAuthenticated, addNewAdmin); //Done
router.post("/doctor/addnew", isAdminAuthenticated, addNewDoctor); //Done
router.get("/doctors", getAllDoctors); //Done
router.get("/patient/me", isPatientAuthenticated, getUserDetails); //Done
router.get("/admin/me", isAdminAuthenticated, getUserDetails); //done
router.get("/patient/logout", isPatientAuthenticated, logoutPatient); //Done
router.get("/admin/logout", isAdminAuthenticated, logoutAdmin); //DOne
router.delete("/doctor/delete/:id", isAdminAuthenticated, deleteDoctor);

export default router;

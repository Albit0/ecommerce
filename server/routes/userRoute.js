const express = require("express");
const router = express.Router();

const {
  getUsers,
  getOneUser,
  deleteUser,
  updateUser,
} = require("../controller/userController");

const { authMiddleware } = require("../middleware/authMiddleware");
const { roleMiddleware } = require("../middleware/roleMiddleware");

const ROLES = require('../config/roles');

router.get("/get-users", getUsers);
router.get("/get/:id", authMiddleware, roleMiddleware(ROLES.admin), getOneUser);
router.delete("/delete/:id", deleteUser);
router.put("/update/:id", updateUser);

module.exports = router;
const express = require("express");
const Task = require("../models/taskModel");
const {
  createTask,
  getTasks,
  home,
  getTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");
const router = express.Router();

router.get("/", home);

// router.route("/api/tasks").get(getTasks).post(createTask);
// router.route("/api/tasks/:id").get(getTask).delete(deleteTask).put(updateTask);

router.post("/api/tasks", createTask);
router.get("/api/tasks", getTasks);
router.get("/api/tasks/:id", getTask);
router.delete("/api/tasks/:id", deleteTask);
router.put("/api/tasks/:id", updateTask);

module.exports = router;

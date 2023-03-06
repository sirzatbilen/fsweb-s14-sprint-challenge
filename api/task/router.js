// `/api/tasks` router buraya
// `/api/tasks` router buraya
const express = require("express");
const TaskModel = require("./model");

const router = express.Router();

const md = require("./middleware");

router.get("/", (req, res, next) => {
  try {
    TaskModel.getAll(req.body).then((tasks) => {
      res.json(tasks);
    });
  } catch (err) {
    next(err);
  }
});

router.post("/", md.checkPayload, async (req, res, next) => {
  try {
    const newTask = await TaskModel.create(req.body);
    res.json(newTask);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

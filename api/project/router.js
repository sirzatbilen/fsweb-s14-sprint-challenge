const express = require("express");

const ProjectModel = require("./model");

const router = express.Router();

const mdw = require("./middleware");

router.get("/", async (req, res, next) => {
  try {
    const projects = await ProjectModel.getAll();
    res.json(projects);
  } catch (error) {
    next(error);
  }
});

router.post("/", mdw.checkPayload, async (req, res, next) => {
  try {
    const newProject = await ProjectModel.create(req.body);
    res.json(newProject);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

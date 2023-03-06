exports.checkPayload = (req, res, next) => {
  const { project_id, task_description } = req.body;

  if (!project_id || !task_description) {
    res
      .status(404)
      .json({ message: "project id ya da task description içermiyor" });
  } else {
    next();
  }
};

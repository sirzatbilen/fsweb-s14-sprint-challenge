exports.checkPayload = (req, res, next) => {
  if (!req.body.project_name) {
    res.status(400).json({ message: "proje adı boş" });
  } else {
    next();
  }
};

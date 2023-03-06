const db = require("../../data/dbConfig");

const checkPayload = async (req, res, next) => {
  try {
    const { resource_name } = req.body;

    if (!resource_name) {
      res.status(400).json({ message: "name eksik" });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

const checkResourceNameUnique = async (req, res, next) => {
  try {
    const { resource_name } = req.body;
    const name = await db("resources")
      .where("resource_name", resource_name)
      .first();

    if (name) {
      res.status(404).json({ message: "name var" });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  checkPayload,
  checkResourceNameUnique,
};

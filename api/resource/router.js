// `/api/resources` router buraya
// `/api/resources` router buraya

const express = require("express");

const ResorcesModel = require("./model");

const router = express.Router();

const mdw = require("./middleware");

router.get("/", async (req, res, next) => {
  try {
    const resources = await ResorcesModel.getAll();
    res.json(resources);
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  mdw.checkPayload,
  mdw.checkResourceNameUnique,
  async (req, res, next) => {
    try {
      const newRecource = await ResorcesModel.create(req.body);
      res.json(newRecource);
    } catch (error) {
      next(error);
    }
  }
);

// router.use((err, req, res, next) => {
//   res.status(err.status || 500).json({
//     CustomMessage: "Hata oluştu..",
//     message: err.message,
//   });
// });

module.exports = router;

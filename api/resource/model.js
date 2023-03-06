// `Resource` modeli buraya
const db = require("../../data/dbConfig");

const getAll = (resource_id) => {
  return db("resources");
};

const create = async (payload) => {
  const [resource_id] = await db("resources").insert(payload);
  const newResorunce = await db("resources")
    .where("resource_id", resource_id)
    .first();
  return newResorunce;
};

module.exports = {
  getAll,
  create,
};

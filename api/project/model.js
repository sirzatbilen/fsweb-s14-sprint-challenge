const db = require("../../data/dbConfig");

const getAll = async (project_id) => {
  const rows = await db("projects");

  const results = rows.map((item) => {
    return {
      ...item,
      project_completed: item.project_completed ? true : false,
    };
  });
  return results;
};

const create = async (payload) => {
  const [project_id] = await db("projects").insert(payload);
  const newProject = await db("projects")
    .where("project_id", project_id)
    .first();

  const results = {
    ...newProject,
    project_completed: newProject.project_completed ? true : false,
  };
  return results;
};

module.exports = {
  getAll,
  create,
};

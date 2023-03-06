// bu`Task` modeli buraya
const db = require("../../data/dbConfig");

// bu`Task` modeli buraya

const getAll = async (task_id) => {
  const rows = await db("tasks as t")
    .leftJoin("projects as p", "p.project_id", "t.project_id")
    .select("t.*", "p.project_name", "p.project_description");

  const results = rows.map((item) => {
    return {
      ...item,
      task_completed: item.task_completed ? true : false,
    };
  });
  return results;
};

const create = async (payload) => {
  const [task_id] = await db("tasks").insert(payload);
  const newTask = await db("tasks").where("task_id", task_id).first();

  const results = {
    ...newTask,
    task_completed: newTask.task_completed ? true : false,
  };
  return results;
};

module.exports = {
  getAll,
  create,
};

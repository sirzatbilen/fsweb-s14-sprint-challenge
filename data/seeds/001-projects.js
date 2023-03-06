/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("projects").insert([
    {
      project_name: "Web API",
      project_description: "Build APIs",
      project_completed: 0,
    },
  ]);

  await knex("resources").insert([
    {
      resource_name: "computer",
      resource_description: "Windows PC",
    },
  ]);

  await knex("tasks").insert([
    {
      task_description: "Do baz",
      task_notes: "Have fun!",
      task_completed: 1,
      project_id: 1,
    },
  ]);
  await knex("project_resources").insert([
    {
      project_id: 1,
      resource_id: 1,
    },
  ]);
};

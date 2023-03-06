/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  const all = await knex.schema
    .createTable("projects", (p) => {
      p.increments("project_id");
      p.string("project_name", 128).notNullable();
      p.string("project_description", 256);
      p.integer("project_completed").defaultTo(0);
    })
    .createTable("resources", (r) => {
      r.increments("resource_id");
      r.string("resource_name", 128).notNullable().unique();
      r.string("resource_description", 256);
    })
    .createTable("tasks", (t) => {
      t.increments("task_id");
      t.string("task_description", 256).notNullable();
      t.string("task_notes", 256);
      t.integer("task_completed").defaultTo(0);
      t.integer("project_id")
        .references("project_id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("project_resources", (pr) => {
      pr.increments("project_resources");
      pr.integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects");
      pr.integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resource_id")
        .inTable("resources")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
  return all;
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};

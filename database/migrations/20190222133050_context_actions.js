
exports.up = function(knex, Promise) {
    return knex.schema.createTable('context_actions', tbl => {
        tbl.integer('context_id')
            .unsigned()
            .references('id')
            .inTable('contexts')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.integer('action_id')
            .unsigned()
            .references('id')
            .inTable('actions')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('context_actions')
};

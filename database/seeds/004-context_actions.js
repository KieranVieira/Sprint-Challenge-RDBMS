
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('context_actions')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('context_actions').insert([
        {context_id: 1, action_id: 1},
        {context_id: 2, action_id: 1},
        {context_id: 3, action_id: 1}
      ]);
    });
};

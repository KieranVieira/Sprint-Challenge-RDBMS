
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contexts')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('contexts').insert([
        {context: 'at_home'},
        {context: 'at_work'},
        {context: 'at_computer'}
      ]);
    });
};

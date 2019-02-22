
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {description:'action1Description', completed:true, project_id:1},
        {description:'action2Description', completed:true, project_id:1},
        {description:'action3Description', completed:true, project_id:1}
      ]);
    });
};

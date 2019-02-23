
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'project1', description: 'project1Description', completed:false},
        {name: 'project2', description: 'project2Description', completed:true},
        {name: 'project3', description: 'project3Description', completed:false}
      ]);
    });
};

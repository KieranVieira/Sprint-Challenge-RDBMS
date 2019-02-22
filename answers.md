Explain the difference between RDBMS and SQL.
RDMBS is a relational database management system, This could be a query builder like knex or the sqlite studio which helps manage relational databases. The difference is that SQL is the actual database where data is stored and then we can build SQL queries to retrieve this data.
Why do tables need a primary key?
Tables need a primary key so we can find the speicific row by its ID and so that 2 rows cannot be the same, if a table has primary keys, than we can differenciate users not by their name but by their ID which makes it a lot easier for us to 
What is the name given to a table column that references the primary key on another table.
A Foreign key is a key that references the primary key from another table so we can get more information using join query
What do we need in order to have a many to many relationship between two tables.
To have a many to many realtionship we need two foreign keys which combine two table together, for example if we had a chort with multiple students, we would need to have a forign key which references the cohort, and one that references one student, and so on with as many students as we have, the table would look like this:

cohort_id|student_id
---------|----------
        1|1
        1|2
        1|3
        1|4

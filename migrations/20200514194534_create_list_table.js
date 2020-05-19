const createListTableQuery = `create table list (
	id serial primary key,
	uuid text unique,
	"name" text unique,
	ctime timestamptz,
	mtime timestamptz default current_timestamp
	
);`;

const dropListTableQuery = `drop table list;`;
exports.up = function (knex) {
  return knex.raw(createListTableQuery);
};

exports.down = function (knex) {
  return knex.raw(dropListTableQuery);
};

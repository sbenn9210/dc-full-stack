const knexLib = require("knex");
const dbCfg = require("../knexfile");

// this will hold our database connection
let conn = null;

//this should return a promise
function connect() {
  return new Promise(function (resolve, reject) {
    conn = knexLib(dbCfg.development);
    conn
      .raw(`SELECT 1 + 1  AS TEST;`)
      .then((result) => {
        if (result.rows.length === 1 && result.rows[0].test === 2) {
          console.log("Database connection established");
          resolve();
        } else {
          reject("Database was unable to do 1 + 1");
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

const getListsQuery = `SELECT * FROM list`;

function getLists() {
  return conn.raw(getListsQuery).then((result) => {
    return result.rows;
  });
}

// ------------------------------------
// Public API

module.exports = {
  connect: connect,
  getLists,
  getLists,
};

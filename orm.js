const pg = require('pg');

const pool = new pg.Pool({
    user: "vox",
    password: "",
    host: "localhost",
    port: 5432,
    database: "shopping_list",
    ssl: false
});

const orm = {
  readAll: function() {
    return 'reading';
  },

  create: function(newItem) {
    return newItem;
  }
}

module.exports = orm;

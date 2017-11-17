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
  readAll: function(tableName) {
    const sql = `SELECT * FROM ${tableName};`;
    return pool.query(sql);
  },

  create: function(newItem, tableName) {
    const sql = `INSERT INTO ${tableName}(price, name) VALUES($1,$2);`;
    const values = [newItem.price, newItem.name];
    return pool.query(sql, values);
  }
}

module.exports = orm;

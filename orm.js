const pg = require('pg');

const connectionUrl = process.env.DATABASE_URL;

const pool = new pg.Pool({
  url: connectionUrl
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

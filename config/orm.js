const connection = require("../config/connection.js");

const orm = {
  selectAll: function (tableInput, cb) {
    const queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function (table, cols, vals, cb) {
    let queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += "?";
    queryString += ") ";

    connection.query(queryString, vals, function (err, result) {
      if (err) throw err;

      cb(result);
    });
  },
  updateOne: function (table, objColVals, condition, cb) {
    let queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objColVals
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function (err, result) {
      if (err) throw err;

      cb(result);
    });
  },
};

module.exports = orm;
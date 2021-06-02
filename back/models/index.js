const Sequelize = require("sequelize");
const env = process.send.NODE_ENV || "development";
const config = require("../config/config")[env];
const db = {};
// nodejs와 mysql 연결
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

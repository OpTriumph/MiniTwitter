const Sequelize = require("sequelize");
const comment = require("./comment");
const post = require("./post");
const user = require("./user");

const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.Comment = comment;
db.Post = post;
db.User = user;

//테이블 생성 (Object.keys 문법으로 key를 담은 배열 활용)
Object.keys(db).forEach((modelName) => {
  db[modelName].init(sequelize);
});

//관계 생성
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

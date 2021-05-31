module.exports = (sequelize, DataTypes) => {
  const Hashtag = sequelize.define(
    "Hashtag",
    {
      //id 기본적으로 존재.
      name: {},
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );
  Hashtag.associate = (db) => {};
  return Hashtag;
};

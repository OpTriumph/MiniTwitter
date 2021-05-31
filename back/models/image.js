module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    "Image",
    {
      //id 기본적으로 존재.
      src: {},
    },
    {
      //mb4 추가시 이모티콘도 추가 가능해진다.
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );
  Image.associate = (db) => {};
  return Image;
};

module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    "Image",
    {
      //url이므로 길게 잡음
      src: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
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

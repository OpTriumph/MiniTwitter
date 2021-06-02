module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      //mb4 추가시 이모티콘도 추가 가능해진다.
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    }
  );
  Post.associate = (db) => {};
  return Post;
};

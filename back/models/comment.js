module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      //id 기본적으로 존재.
      content: {},
    },
    {
      //mb4 추가시 이모티콘도 추가 가능해진다.
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    }
  );
  Comment.associate = (db) => {};
  return Comment;
};

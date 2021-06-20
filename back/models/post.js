const dataTypes = require("sequelize");
const { Model } = dataTypes;

class Post extends Model {
  static init(sequelize) {
    return super.init(
      {
        // id가 기본적으로 들어간다.
        UserId: {
          type: dataTypes.INTEGER,
          allowNull: false,
        },
        content: {
          type: dataTypes.TEXT,
          allowNull: false,
        },
      },
      {
        modelName: "Post",
        tableName: "posts",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci", // 이모티콘 저장
        sequelize,
      }
    );
  }
  static associate(db) {
    db.Post.hasMany(db.Comment); // post.addComments, post.getComments
    db.Post.belongsToMany(db.User, { through: "Like", as: "Likers" }); // post.addLikers, post.removeLikers
    db.Post.belongsTo(db.User); // post.addUser, post.getUser, post.setUser
  }
}

module.exports = Post;

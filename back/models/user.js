const dataTypes = require("sequelize");
const { Model } = dataTypes;

class User extends Model {
  //static 메서드 선언으로 클래스의 인스턴스 없이 사용
  static init(sequelize) {
    //Model의 init을 호출
    return super.init(
      {
        provider: {
          type: dataTypes.STRING(20),
          allowNull: true,
          unique: false,
        },
        email: {
          type: dataTypes.STRING(50), // STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
          allowNull: true,
          unique: true, // 고유한 값
        },
        nickname: {
          type: dataTypes.STRING(20),
          allowNull: false,
        },
        password: {
          type: dataTypes.STRING(100),
          allowNull: true,
        },
      },
      {
        modelName: "User",
        tableName: "users",
        charset: "utf8",
        collate: "utf8_general_ci", // 한글 저장
        sequelize,
      }
    );
  }

  static associate(db) {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Comment);
    db.User.belongsToMany(db.Post, { through: "Like", as: "Liked" });
    /*db.User.belongsToMany(db.User, {
      through: "Follow",
      as: "Followers",
      foreignKey: "FollowingId",
    });
    db.User.belongsToMany(db.User, {
      through: "Follow",
      as: "Followings",
      foreignKey: "FollowerId",
    });*/
  }
}

module.exports = User;

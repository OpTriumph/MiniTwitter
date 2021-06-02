module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User", //mySQL에서는 Users로 저장됨.
    {
      //id 기본적으로 존재.
      email: {
        type: DataTypes.STRING(30),
        allowNull: false, // 필수요소
        unique: true,
      },
      nickname: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      // 한글 위한 코드
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );
  //model간의 관계 정의
  User.associate = (db) => {};
  return User;
};

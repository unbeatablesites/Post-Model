module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [10]
      }
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: "Personal"
    }
  });
  return Post;
};


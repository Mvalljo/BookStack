const User = require("./user");
const Post = require("./Post");
const Books = require("./Books");

User.belongsToMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
  through: {
    model: Books,
    unique: false,
  },
  as: "read_books",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
  through: {
    model: Books,
    unique: false,
  },
  as: "user_post",
});

module.exports = { User, Post, Books };

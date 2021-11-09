const User = require("./user");
const Post = require("./Post");
const Books = require("./Books");

User.hasMany(Post);

Post.belongsTo(User);

module.exports = { User, Post, Books };

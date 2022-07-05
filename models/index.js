//user, post , comment

const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

//used has many posts
User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "cascade",
});
//used has many comments
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "cascade",
});
//posts belongs to user
Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});
//posts has many comments
Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "cascade",
});
//many comments on  one post
Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "cascade",
});
//comments belong to users
Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

module.exports = { User, Comment, Post };

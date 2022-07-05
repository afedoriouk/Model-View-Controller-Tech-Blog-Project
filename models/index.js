//user, post , comment

const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

//used has many posts

//used has many comments

//posts belongs to user
Post.belongsTo(User, { foreignKey: "userId", onDelete: "CASCADE" });
//posts has many comments
// Post.hasMany(Comment, {
//   foreignKey: "post_id",
//   onDelete: "cascade",
// });
//many comments on  one post
// Comment.belongsTo(User, {
//   foreignKey: "user_id",
//   onDelete: "cascade",
// });

module.exports = { User, Comment, Post };

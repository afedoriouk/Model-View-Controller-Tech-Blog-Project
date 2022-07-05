const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');
const seedData = async()=>{
    await sequelize.sync({forse:true});
    //user info
    const users = await User.bulkCreate(userData, {
        individualHooks:true,
        return: true,
    });
//Create Posts
    const post = await Post.bulkCreate(postData, {
        individualHooks: true,
        return: true,

    });
    //Create Comments
    const comments = await Comment.bulkCreate(commentData, {
        individualHooks: true,
        return: true,
        
    });
    Process.exit(0);
}   ;
seedDatabase();
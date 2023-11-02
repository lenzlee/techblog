const { Comment } = require("../models");

const commentData = [
  {
    comment_content: "Comment 1 Here",
    user_id: 1,
    post_id: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
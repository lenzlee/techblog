const { Comment } = require("../models");

const commentData = [
  {
    comment_content: "Comment 1 Here",
    user_id: 2,
    post_id: 3,
  },
  {
    comment_content: "Comment 2 Here",
    user_id: 3,
    post_id: 3,
  },
  {
    comment_content: "Comment 3 Here",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_content: "Comment 4 Here",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_content: "Comment 5 Here",
    user_id: 3,
    post_id: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
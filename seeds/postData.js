const { Post } = require("../models");

const postdata = [
  {
    title: "Title 1 Here",
    content:
      "Content Goes Here for post 1",
    user_id: 1,
  },
  {
    title: "Title 2 Here",
    content:
      "Content goes here for post 2",
    user_id: 2,
  },
  {
    title: "Title 3 Here",
    content:
      "Content goes here for post 3",
    user_id: 3,
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
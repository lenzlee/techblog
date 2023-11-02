const { Post } = require("../models");

const postdata = [
  {
    title: "Title 1 Here",
    content:
      "Content Goes Here for post 1",
    user_id: 1,
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
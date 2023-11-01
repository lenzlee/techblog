const { User } = require("../models");

const userdata = [
  {
    username: "Lenz",
    password: "password1",
  },
  {
    username: "Lee",
    password: "password2",
  },
  {
    username: "Lenzlee",
    password: "password3",
  },
];

const seedUser = () =>
  User.bulkCreate(userdata, {
    individualHooks: true,
  });

module.exports = seedUser;
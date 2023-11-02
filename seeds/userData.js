const { User } = require("../models");

const userdata = [
  {
    username: "Lenz",
    password: "password1",
  },
];

const seedUser = () =>
  User.bulkCreate(userdata, {
    individualHooks: true,
  });

module.exports = seedUser;
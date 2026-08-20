
const sequelize = require("../config/connection");

const { Post, Category } = require("../models");

const postData = require("./posts.json");

const categoryData = require("./categories.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Category.bulkCreate(categoryData);
  await Post.bulkCreate(postData);

  process.exit(0);
};

seedDatabase();

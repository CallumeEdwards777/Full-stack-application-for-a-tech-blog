const app = require("express").Router();


const { Post, Category } = require("../models/index");


app.post("/", async (req, res) => {
  try {
    const { categoryId, userId, title, content, postedBy } = req.body;
    const post = await Post.create({ categoryId, userId, title, content, postedBy });

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: "Error adding post" });
  }
});


app.get("/", async (req, res) => {
  try {
    const { categoryId } = req.query;

    const whereClause = categoryId ? { categoryId } : {};
    const posts = await Post.findAll({ where: whereClause,
    include: [{ model: Category, as: "category" }] });

    res.json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error retrieving posts"});
  }
});

app.get("/:id", async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving post" });
  }
});


app.put("/:id", async (req, res) => {
  try {
    const { title, content, postedBy } = req.body;
    const post = await Post.update(
      { title, content, postedBy },
      { where: { id: req.params.id } }
    );
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Error updating post" });
  }
});


app.delete("/:id", async (req, res) => {
  try {
    const post = await Post.destroy({ where: { id: req.params.id } });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Error deleting post" });
  }
});


module.exports = app;

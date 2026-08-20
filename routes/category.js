const app = require("express").Router();


const { Category } = require("../models/index");


app.post("/", async (req, res) => {
  try {
    const { category_name } = req.body;
    const category = await Category.create({ category_name });
    res.status(201).json(category);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error adding category", error: error });
  }
});


app.get("/", async (req, res) => {
  try {
    console.log("Getting all categories");
    const categories = await Category.findAll();
    console.log(categories);
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: "Error adding categories", error: error });
  }
});

app.get("/:id", async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving category" });
  }
});


app.put("/:id", async (req, res) => {
  try {
    const { category_name } = req.body;
    const updated = await Category.update(
      { category_name },
      { where: { id: req.params.id } }
    );
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: "Error updating category" });
  }
});


app.delete("//:id", async (req, res) => {
  try {
    const category = await Category.destroy({ where: { id: req.params.id } });
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: "Error deleting category" });
  }
});


module.exports = app;

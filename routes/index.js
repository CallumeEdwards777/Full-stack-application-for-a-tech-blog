const router = require("express").Router();

const spreadRoutes = require("./spread");
const categoryRoutes = require("./category");
const userRoutes = require("./user");


router.get("/api", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

router.use("/api/categories", categoryRoutes);
router.use("/api/spread", spreadRoutes);
router.use("/api/users", userRoutes);

module.exports = router;
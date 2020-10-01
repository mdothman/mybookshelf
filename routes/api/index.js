const router = require("express").Router();
const bookRoutes = require("./books");
const queryRoutes = require('./query')

// Book routes
router.use("/books", bookRoutes);
router.use("/query", queryRoutes);


module.exports = router;

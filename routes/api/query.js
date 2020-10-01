const router = require("express").Router();
const queryController = require('../../controllers/queryController');


router.route("/:query")
.get(queryController.findBook);

module.exports = router;
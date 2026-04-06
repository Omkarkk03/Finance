const router = require("express").Router();
const auth = require("../middleware/auth");
const ctrl = require("../controllers/dashboardController");

router.get("/", auth, ctrl.summary);

module.exports = router;
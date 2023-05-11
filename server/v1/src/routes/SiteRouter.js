const express = require("express");
const { create, index } = require("../controllers/SiteController");
const router = express.Router();

const authenticate = require("../middlewares/authenticate");

router.route("/").post(authenticate, create);
router.route("/").get(authenticate, index);

module.exports = router;

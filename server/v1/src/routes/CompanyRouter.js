const express = require("express");
const router = express.Router();

const validate = require("../middlewares/validate");
const schemas = require("../validations/Company");

const {
  create,
  get,
  loginCompany,
} = require("../controllers/CompanyController");

router.route("/").get(get);
router.route("/").post(validate(schemas.createValidation), create);
router.route("/login").post(validate(schemas.loginValidation), loginCompany);

module.exports = router;

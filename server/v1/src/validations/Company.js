const Joi = require("joi");

const createValidation = Joi.object({
  company_name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  tax_number: Joi.string().required(),
  number_of_employees: Joi.number().min(1),
  number_of_site: Joi.number().min(0),
});

const loginValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

module.exports = {
  createValidation,
  loginValidation,
};

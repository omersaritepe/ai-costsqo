const Mongoose = require("mongoose");

const companySchema = new Mongoose.Schema(
  {
    company_name: String,
    email: { type: String, unique: true },
    password: String,
    tax_number: String,
    number_of_employees: Number,
    number_of_site: Number,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Company = Mongoose.model("Company", companySchema);

module.exports = Company;

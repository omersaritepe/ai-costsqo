const Company = require("../models/Company");

const insert = (companyData) => {
  const company = new Company(companyData);
  return company.save();
};

const list = (data) => {
  return Company.find(data || {});
};

const login = (companyData) => {
  return Company.findOne(companyData);
  // try {
  //   const { email, password } = companyData;
  //   const company = await Company.findOne({ email });
  //   if (company) {
  //     const match = await bcrypt.compare(password, company.password);
  //     if (match) {
  //       return company;
  //     } else {
  //       return null;
  //     }
  //   } else {
  //     return null;
  //   }
  // } catch (error) {
  //   throw new Error("An error occurred while logging in.");
  // }
};

module.exports = {
  insert,
  list,
  login,
};

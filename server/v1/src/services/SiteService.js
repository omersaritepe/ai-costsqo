const Site = require("../models/Site");

const insert = (siteData) => {
  const site = new Site(siteData);
  return site.save();
};

const list = () => {
  return Site.find({});
};

module.exports = {
  insert,
  list,
};

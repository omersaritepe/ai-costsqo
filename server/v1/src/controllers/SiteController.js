const httpStatus = require("http-status");
const { insert, list } = require("../services/SiteService");

const create = (req, res) => {
  console.log(req.body);
  insert(req.body)
    .then((result) => {
      res.status(httpStatus.OK).send(result);
    })
    .catch((err) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    });
};

const index = (req, res) => {
  list()
    .then((result) => {
      res.status(httpStatus.OK).send(result);
    })
    .catch((e) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
    });
};

module.exports = {
  create,
  index,
};

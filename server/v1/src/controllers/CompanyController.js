const httpStatus = require("http-status");
const { insert, list, login } = require("../services/CompanyService");
const {
  passwordToHash,
  generateAccessToken,
  generateRefreshToken,
} = require("../scripts/utils/helper");

const create = (req, res) => {
  req.body.password = passwordToHash(req.body.password);

  insert(req.body)
    .then((userData) => {
      res.status(httpStatus.CREATED).send(userData);
    })
    .catch((e) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
    });
};

const loginCompany = (req, res) => {
  req.body.password = passwordToHash(req.body.password);
  login(req.body)
    .then((user) => {
      if (!user)
        return res
          .status(httpStatus.BAD_REQUEST)
          .json({ error: "Invalid credentials" });

      user = {
        ...user.toObject(),
        tokens: {
          acces_token: generateAccessToken(user),
          refresh_token: generateRefreshToken(user),
        },
      };
      delete user.password;

      res.status(httpStatus.OK).send(user);
    })
    .catch((e) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
    });
};

const get = (req, res) => {
  list()
    .then((data) => {
      res.status(httpStatus.OK).send(data);
    })
    .catch((e) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
    });
};

module.exports = {
  create,
  get,
  loginCompany,
};

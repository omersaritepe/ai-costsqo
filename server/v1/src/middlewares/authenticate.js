const httpStatus = require("http-status");
const JWT = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];

  if (token === null)
    return res.status(httpStatus.UNAUTHORIZED).send({ error: "UNAUTHORIZED" });

  JWT.verify(token, process.env.ACCES_TOKEN_SECRET_KEY, (err, user) => {
    if (err)
      return res.status(httpStatus.FORBIDDEN).send({ error: "Token Error" });
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;

const CryptoJS = require("crypto-js");
const JWT = require("jsonwebtoken");

const passwordToHash = (password) => {
  return CryptoJS.HmacSHA256(
    password,
    CryptoJS.HmacSHA1(password, process.env.PASSWORD_HASH)
  ).toString();
};

const generateAccessToken = (user) => {
  return JWT.sign(user.toObject(), process.env.ACCES_TOKEN_SECRET_KEY, {
    expiresIn: "5h",
  });
};
const generateRefreshToken = (user) => {
  return JWT.sign(user.toObject(), process.env.REFRESH_TOKEN_SECRET_KEY);
};

module.exports = {
  passwordToHash,
  generateAccessToken,
  generateRefreshToken,
};

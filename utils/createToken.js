const jwt = require("jsonwebtoken");
const { jwtDecode } = require("jwt-decode");

const createToken = (payloadData, secretKey, tokenExpirationValue = "2d") => {
  const key = Object.keys(payloadData);

  const token = jwt.sign({ [key]: payloadData[key] }, secretKey, {
    expiresIn: tokenExpirationValue,
  });
  const { exp } = jwtDecode(token);

  const tokenLifeTime = new Date(exp * 1000);

  return [token, tokenLifeTime];
};

module.exports = { createToken };

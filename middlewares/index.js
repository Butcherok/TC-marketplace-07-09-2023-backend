const { fieldValidation, checkFile } = require("./fieldValidation");
const { authentificate } = require("./authentification");
const { checkUserData, checkFieldData, checkUserAuth } = require("./checkData");
const { isValidId } = require("./isValidId");
// const { googleStrategy } = require("./passport");

module.exports = {
  fieldValidation,
  checkFile,
  authentificate,
  checkUserData,
  checkUserAuth,
  isValidId,
  checkFieldData,
};

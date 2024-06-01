const {
  registerSchemaValidation,
  loginSchemaValidation,
  editUserValidation,
} = require("./users/usersSchemaValidation");

const {
  addProductSchema,
  updateProductSchema,
} = require("./products/productsSchemaValidation");

module.exports = {
  registerSchemaValidation,
  loginSchemaValidation,
  editUserValidation,
  addProductSchema,
  updateProductSchema,
};

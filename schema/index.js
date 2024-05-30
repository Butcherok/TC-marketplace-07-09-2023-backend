const {
  registerSchemaValidation,
  loginSchemaValidation,
  editUserValidation,
} = require("./users/usersSchemaValidation");

const {
  addSchema,
  updateGoodSchema,
} = require("./goods/goodsSchemaValidation");

module.exports = {
  registerSchemaValidation,
  loginSchemaValidation,
  editUserValidation,
  addSchema,
  updateGoodSchema,
  // addPetSchemaValidation,
  // addSchema,
  // updateFavorite,
  // addPetSchemaValidation,
};

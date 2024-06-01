const Joi = require("joi").extend(require("@joi/date"));

const addProductSchema = Joi.object({
  category: Joi.string()
    .valid("drones", "parts", "accessories", "assets")
    .required(),
  title: Joi.string()
    .min(2)
    .max(16)
    .messages({ string: `Set title for good` })
    .required(),
  // date: Joi.date()
  //   .iso()
  //   .format("DD-MM-YYYY")
  //   .min("01-01-2000")
  //   .max(new Date())
  //   .messages({
  //     "date.format": `Date format is DD-MM-YYYY`,
  //     "date.max": "Your pet cannot be born in the future",
  //     "date.min": "Try to choose a later date",
  //   })
  //   .required(),
  type: Joi.string()
    .min(2)
    .max(16)
    .messages({ "string.valid": `Enter the kind of good` })
    .required(),
  // file: Joi.string(),
  price: Joi.number().positive().greater(0),
  quantity: Joi.number()
    .integer()
    .min(1)
    .messages({ string: "Quantity field is required" }),
  comments: Joi.alternatives().try(
    Joi.string().trim().valid("").empty("").default(""),
    Joi.string().max(120)
  ),
});
const updateProductSchema = Joi.object({
  price: Joi.number()
    .positive()
    .greater(0)
    .when("category", { is: "sell", then: Joi.required() }),
  quantity: Joi.number()
    .integer()
    .min(1)
    .messages({ string: "Quantity field is required" }),
});
module.exports = { addProductSchema, updateProductSchema };

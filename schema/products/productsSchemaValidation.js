const Joi = require("joi").extend(require("@joi/date"));

const addSchema = Joi.object({
	type: Joi.string().valid("drone", "set", "parts").required(),
	title: Joi.string()
		.min(3)
		.max(30)
		.messages({ string: `Set title for product` })
		.required(),
	price: Joi.number().integer().greater(0).required(),
	count: Joi.number().integer().greater(0).required(),
	comments: Joi.alternatives().try(
		Joi.string().trim().valid("").empty("").default(""),
		Joi.string().max(120)
	),
});

module.exports = { addSchema };

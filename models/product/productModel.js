const { Schema, model } = require("mongoose");
const { schemaError } = require("../../utils");

const productSchema = new Schema(
	{
		title: {
			type: String,
			minlength: 3,
			maxlength: 30,
			required: [true, "Set title for product"],
		},
		type: {
			type: String,
			required: true,
			enum: ["drone", "set", "parts"],
		},
		comments: {
			type: String,
			maxlength: 120,
			default: "",
		},
		price: {
			type: Number,
			min: 1,
		},
		count: {
			type: Number,
			min: 0,
		},
		owner: {
			type: Schema.Types.ObjectId,
			ref: "user",
			required: true,
		},
	},
	{ versionKey: false, timestamps: true }
);

productSchema.post("save", schemaError);

const Product = model("product", productSchema);

module.exports = { Product };

const { Schema, model } = require("mongoose");

const { schemaError } = require("../../utils");

const favoritesSchema = new Schema(
  {
    goods: { type: Schema.Types.ObjectId, ref: "goods" },
    title: { type: String },
    imageUrl: { type: String },
    sizes: { type: Number },
    cameraPresence: { type: Boolean },
    remoteControl: { type: String },
    chargeTime: { type: Number },
    autopilot: { type: Boolean },
    weight: { type: Number },
    price: { type: Number },
    description: { type: String },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: false }
);

favoritesSchema.post("save", schemaError);

const Favorites = model("favorites", favoritesSchema);

module.exports = { Favorites };

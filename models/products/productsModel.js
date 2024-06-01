const { Schema, model } = require("mongoose");
const { schemaError } = require("../../utils");

const productsSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    title: {
      type: String,
      minLength: [2, "Title must contain at last 2 characters"],
      maxLength: [16, "Title shouldn't contain more than 16 characters"],
      required: [true, "Title field is required"],
    },
    // producer: {
    //   type: String,
    //   minLength: [2, "Producer field must contain at last 2 characters"],
    //   maxLength: [
    //     16,
    //     "Producer field shouldn't contain more than 16 characters",
    //   ],
    //   required: [true, "Producer field is required"],
    // },
    // seller: {
    //   type: String,
    //   minLength: [2, "Seller field must contain at last 2 characters"],
    //   maxLength: [16, "Seller field shouldn't contain more than 16 characters"],
    //   required: [true, "Seller field is required"],
    // },
    // compatibility: {
    //   type: [String],
    // },
    category: {
      type: String,
      required: true,
      enum: {
        values: ["drones", "accessories", "parts", "assets"],
        message: "{VALUE} is not a valid value",
      },
    },
    date: {
      type: Date,
      default: Date.now(),
      required: false,
    },
    type: {
      type: String,
      required: [true, "Type field is required"],
      minLength: [2, "Type must contain at last 2 characters"],
      maxLength: [16, "Type shouldn't contain more than 16 characters"],
    },
    file: { data: Buffer, contentType: String },
    // sizes: { type: Number },
    // cameraPresence: { type: Boolean },
    // remoteControl: { type: String },
    // chargeTime: { type: Number },
    // autopilot: { type: Boolean },
    // weight: { type: Number },
    price: {
      type: Number,
      default: 1000,
      required: false,
    },
    quantity: {
      type: Number,
      default: 1,
      required: false,
    },
    comments: {
      type: String,
      maxLength: [120, "This field can't contain more than 120 characters"],
    },
    characteristics: {
      remoteControl: { type: String },
      chargeInput: { type: String },
      signalDelay: { type: Number },
      maximumAngle: { type: String },
      cameraPresence: { type: Boolean },
      temperatureRange: { type: String },
      foggingProtection: { type: Boolean },
      maximumAcceleration: { type: Number },
      chargeTime: { type: Number },
      signalTransmissionRange: { type: String },
      controlledHeightRange: { type: String },
      flightRange: { type: Number },
      sizes: { type: Number },
      chargeOutput: { type: String },
      batteryEnergy: { type: String },
      maximumWindSpeed: { type: Number },
      description: { type: String },
    },
  },
  { versionKey: false, timestamps: false }
);

productsSchema.post("save", schemaError);

const Product = model("products", productsSchema);
module.exports = { Product };

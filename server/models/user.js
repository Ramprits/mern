const mongoose = require("mongoose");
const joi = require("@hapi/joi");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false }
  },
  { timestamps: true }
);

module.exports = user =>
 {
  const schema = joi.object().keys({
    userName: joi
      .string()
      .min(5)
      .max(255)
      .required(),
    email: joi
      .string()
      .min(5)
      .max(1024)
      .email()
      .required(),
    password: joi
      .string()
      .min(5)
      .required()
  });
  return joi.validate(user, schema);
};

module.exports = mongoose.model("User", userSchema);

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.pre("save", function hashPassword(next) {
  if (this.isModified("password")) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

// userSchema
//   .virtual("passwordConfirmation")
//   .set(function setPasswordConfirmation(passwordConfirmation) {
//     this._passwordConfirmation = passwordConfirmation;
//   });

// userSchema.pre("validate", function checkPassword(next) {
//   if (
//     this.isModified("password") &&
//     this._passwordConfirmation !== this.password
//   )
//     this.invalidate("passwordConfirmation", "does not match");
//   next();
// });

userSchema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;

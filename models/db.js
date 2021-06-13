const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;
const bcryptSalt = 10;

const userSchema = new Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  image: { type: String, required: false },
  yard: {
    name: { type: String, required: true },
    description: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: Number, required: true },
    rate: { type: Number, required: true },
    fence: { type: Boolean, required: true },
    water: { type: Boolean, required: true },
    hasPets: { type: Boolean, required: true },
  },
});

// userSchema.pre("save", function hashPassword(next) {
//   if (this.isModified("password")) {
//     this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
//   }
//   next();
// });

userSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, Number(bcryptSalt));
  this.password = hash;
  console.log(this.password);
  next();
  return next(this);
});

// bcrypt.genSalt(bcryptSalt, function (err, salt) {
//   bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
//     // Store hash in your password DB.
//   });
// });

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

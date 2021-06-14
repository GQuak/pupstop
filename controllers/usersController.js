const db = require("../models");
// const User = require("../models/user");

module.exports = {
  findAll: function (req, res) {
    db.User.find(req.query)
      // .populate("yard")
      .then((dbModel) => {
        console.log("userModel", dbModel);
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },

  findById: function (req, res) {
    db.User.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  create: function (req, res) {
    db.User.create(req.body)
      .then((dbModel) => {
        console.log(dbModel);
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },

  update: function (req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.User.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};

// module.exports = {
//   findAll: function (req, res) {
//     console.log("User Controller");
//     db.User.find(req.query)
//       // .sort({ date: -1 })
//       .then((dbModel) => {
//         console.log("dbModel", dbModel);
//         res.json(dbModel);
//       })
//       .catch((err) => res.status(422).json(err));
//   },

//   findById: function (req, res) {
//     db.User.findById(req.params.id)
//       .then((dbModel) => res.json(dbModel))
//       .catch((err) => res.status(422).json(err));
//   },

//   create: function (req, res) {
//     db.User.create(req.body)
//       .then((dbModel) => {
//         console.log(dbModel);
//         res.json(dbModel);
//       })
//       .catch((err) => res.status(422).json(err));
//   },

//   update: function (req, res) {
//     db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then((dbModel) => res.json(dbModel))
//       .catch((err) => res.status(422).json(err));
//   },
//   remove: function (req, res) {
//     db.User.findById({ _id: req.params.id })
//       .then((dbModel) => dbModel.remove())
//       .then((dbModel) => res.json(dbModel))
//       .catch((err) => res.status(422).json(err));
//   },
// };

const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Yard.find(req.query)
      .populate("user_id")
      .exec((err, yards) => {
        console.log("Populated Yards " + yards);
        return res.json(yards);
      });
  },
  findById: function (req, res) {
    db.Yard.findById(req.params.id)
      .populate("user_id")
      .exec((err, yard) => {
        console.log("Populated Yard " + yard);
        return res.json(yard);
      });
  },
  create: function (req, res) {
    db.Yard.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Yard.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Yard.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};

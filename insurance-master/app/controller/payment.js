const Payments = require("../models/payment.model");
const Policy = require('../models/policy')
const User = require("../models/user.model");
exports.insert = async (req, res) => {
  const payments = await Payments.create(req.body);
  if (!payments) {
    res.status(200).render("admin_payment");
  } else {
    res.status(500).send({ message: "Error." });
  }
};
exports.addPage = async (re, res) => {
  const policy = await Policy.read();
  const user = await User.read();
  res.render("admin_add_payment",{policy : policy , user : user});
};

exports.read = async (req, res) => {
  const payments = await Payments.read();
  res.render("admin_view_payment", { records: payments });
};


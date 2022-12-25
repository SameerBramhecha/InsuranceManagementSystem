const User = require("../models/user.model");

exports.insert = async (req, res) => {
  const user = await User.create(req.body);
  if (!user) {
    res.status(200).render("admin_customer");
  } else {
    res.status(500).send({ message: "Error." });
  }
};
exports.addPage = async (re, res) => {
  res.render("admin_add_customer");
};

exports.updatePage = async (re, res) => {
  const user = await User.read();
  res.render("update_customer", { records: user, recordid: null });
};

exports.deletePage = async (re, res) => {
  const user = await User.read();
  res.render("admin_delete_customer", { records: user });
};

exports.read = async (req, res) => {
  const user = await User.read();
  res.render("admin_view_customer", { records: user });
};

// exports.readById = async (req, res) => {
//   const user = await User.readById(req.body);
//   res.status(200).send(user);
// };

exports.update = async (req, res) => {
  const user = await User.update( req.body);

  if (!user) {
    console.log("hwkdu")
   res.render("admin_customer");
  } else {
    res.status(500).send({ message: "Error." });
  }
};

exports.delete = async (req, res) => {
  const user = await User.delete(req.body);

  if (!user) {
    res.render("admin_customer");
  } else {
    res.status(500).send({ message: "Error." });
  }
};

exports.readById = async (req, res) => {
  const user = await User.readById(req.body);
  res.render("update_customer", { records: null, recordid: user });
};

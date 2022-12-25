const Endorsements = require("../models/endorsement.model");
exports.insert = async (req, res) => {
  const endorsements = await Endorsements.create(req.body);
  if (!endorsements) {
    res.status(200).render("admin_endorsement");
  } else {
    console.log(res);
    res.status(500).send({ message: "Error." });
  }
};
exports.addPage = async (re, res) => {
  res.render("admin_add_endorsement");
};

exports.updatePage = async (re, res) => {
  const endorsements = await Endorsements.read();
  res.render("update_endorsement", { records: endorsements, recordid: null });
};

exports.deletePage = async (re, res) => {
    const endorsements = await Endorsements.read();
    res.render("admin_delete_endorsement", { records: endorsements });
  };
  
  exports.read = async (req, res) => {
    const endorsements = await Endorsements.read();
    res.render("admin_view_endorsement", { records: endorsements });
  };
  
  
  
  exports.update = async (req, res) => {
    const endorsements = await Endorsements.update( req.body);
  
    if (!endorsements) {
      res.render("admin_endorsement");
    } else {
      res.status(500).send({ message: "Error." });
    }
  };
  
  exports.delete = async (req, res) => {
    const endorsements = await Endorsements.delete(req.body);
  
    if (!endorsements) {
      res.render("admin_endorsement");
    } else {
      res.status(500).send({ message: "Error." });
    }
  };
  
  exports.readById = async (req, res) => {
    
    const endorsements = await Endorsements.readById(req.body);
    
    res.render("update_endorsement", { records: null, recordid: endorsements });
  };
  
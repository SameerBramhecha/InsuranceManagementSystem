const Agent = require('../models/agent.model')

exports.insert = async (req, res) => {
    const agent = await Agent.create(req.body);
    if (!agent) {
      res.status(200).render("admin_agent");
    } else {
      res.status(500).send({ message: "Error." });
    }
  };
  exports.addPage = async (re, res) => {
    res.render("admin_add_agent");
  };
  
  exports.updatePage = async (re, res) => {
    const agent = await Agent.read();
    res.render("update_agent", { records: agent, recordid: null });
  };
  
  exports.deletePage = async (re, res) => {
    const agent = await Agent.read();
    res.render("admin_delete_agent", { records: agent });
  };
  
  exports.read = async (req, res) => {
    const agent = await Agent.read();
    res.render("admin_view_agent", { records: agent });
  };
  
  exports.update = async (req, res) => {
    const agent = await Agent.update(req.body);
  
    if (!agent) {
      res.render("admin_agent");
    } else {
      res.status(500).send({ message: "Error." });
    }
  };
  
  exports.delete = async (req, res) => {
    const agent = await Agent.delete(req.body);
  
    if (!agent) {
      res.render("admin_agent");
    } else {
      res.status(500).send({ message: "Error." });
    }
  };
  
  exports.readById = async(req, res) => {
    console.log(req.body)
    const agent = await Agent.readById(req.body)
   console.log(agent)
     res.render('update_agent',{records:null,recordid:agent})
}
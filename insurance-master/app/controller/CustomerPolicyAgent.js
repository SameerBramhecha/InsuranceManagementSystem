const CPA = require('../models/CustomerPolicyAgent.model')
const Policy = require('../models/policy')
const User = require("../models/user.model");
const Agent = require("../models/agent.model")
exports.insert = async(req, res) => {
    const cpa = await CPA.create(req.body)
    if(!cpa){
       res.status(200).render("admin_cpa");
    }else{
        res.status(500).send({message: 'Error.'})
    }
}
exports.addPage = async (re, res) => {
	const policy = await Policy.read();
  const user = await User.read();
  const agent = await Agent.read();
  res.render("admin_add_cpa",{policy : policy , user : user, agent:agent});
};


exports.read = async(req, res) => {
    const cpa = await CPA.read();
    res.render("admin_view_cpa",{records:cpa})
};

exports.view = async(req, res) => {
    const cpa = await CPA.view();
    res.render("admin_view_cpa",{records:cpa})
};

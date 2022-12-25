const  PolicyBenifit = require('../models/InsurancePolicyBenifit.model')
exports.insert = async(req, res) => {
    const policyBenifit = await PolicyBenifit.create(req.body)
    if(!policyBenifit){
         res.render('admin_policy');
    }else{
        console.log(res)
        res.status(500).send({message: 'Error.'})
    }
}
exports.addPage = async(re,res) => {
    // const policyBenifit = await PolicyBenifit.read();
    res.render('admin_add_benefit');
}

exports.read = async(req, res) => {
    const policyBenifit = await PolicyBenifit.read();
  res.render("admin_view_benefit", { records: policyBenifit });
}


exports.update = async(req, res) => {
    const policyBenifit = await PolicyBenifit.update(req.params.id, req.body)

    if(!policyBenifit){
        res.status(200).send({message: 'Ok!'})
    }else{
        res.status(500).send({message: 'Error.'})
    }
}

exports.delete = async (req, res) => {
    const policy = await PolicyBenifit.delete(req.params.id, req.body);

    if (!policy) {
        res.status(200).send({ message: 'Ok!' })
    } else {
        res.status(500).send({ message: 'Error.' });
    }
}


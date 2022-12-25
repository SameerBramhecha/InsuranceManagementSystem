const  PolicyDrawback = require('../models/InsurancepolicyDrawback.model')
exports.insert = async(req, res) => {
    const policyDrawback = await PolicyDrawback.create(req.body)
    if(!policyDrawback){
        res.render('admin_policy');
    }else{
        res.status(500).send({message: 'Error.'})
    }
}
exports.addPage = async(re,res) => {
    // const policyBenifit = await PolicyBenifit.read();
    res.render('admin_add_drawback');
}


exports.read = async(req, res) => {
    const policyDrawback = await PolicyDrawback.read();
  res.render("admin_view_drawback", { records: policyDrawback });
}


exports.update = async(req, res) => {
    const policyDrawback = await PolicyDrawback.update(req.params.id, req.body)

    if(!policyDrawback){
        res.status(200).send({message: 'Ok!'})
    }else{
        res.status(500).send({message: 'Error.'})
    }
}

exports.delete = async (req, res) => {
    const policyDrawback = await PolicyDrawback.delete(req.params.id, req.body);

    if (!policyDrawback) {
        res.status(200).send({ message: 'Ok!' })
    } else {
        res.status(500).send({ message: 'Error.' });
    }
}


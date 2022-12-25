const Policy = require('../models/policy')
const  PolicyBenifit = require('../models/InsurancePolicyBenifit.model')
const  PolicyDrawback = require('../models/InsurancepolicyDrawback.model')
exports.insert = async(req, res) => {
    const policy = await Policy.create(req.body)
    if(!policy){
            res.render('admin_policy')
    }else{
        console.log(res)
        res.status(500).send({message: 'Error.'})
    }
}

exports.addPage = async(re,res) => {
    const policyBenifit = await PolicyBenifit.read();
    const policyDrawback = await PolicyDrawback.read();
    res.render('admin_add_policy',{ benifits : policyBenifit, 
                                    drawbacks: policyDrawback});
}

exports.updatePage = async(re,res) => {
    const policy = await Policy.read();
    const policyBenifit = await PolicyBenifit.read();
    const policyDrawback = await PolicyDrawback.read();
    res.render('update_policy',{    records : policy ,
                                        recordid : null,
                                      benifits : policyBenifit, 
                                      drawbacks: policyDrawback});
}

exports.deletePage = async(re,res) => {
    const policy = await Policy.read();
    const policyBenifit = await PolicyBenifit.read();
    const policyDrawback = await PolicyDrawback.read();
    res.render('admin_delete_policy',{records : policy ,
                                      benifits : policyBenifit, 
                                      drawbacks: policyDrawback});
    
}
exports.read = async(req, res) => {
    const policy = await Policy.read();
    const policyBenifit = await PolicyBenifit.read();
    const policyDrawback = await PolicyDrawback.read();
    //res.send(policy)
    res.render('admin_view_policy',{ records:policy , 
                                     benifits : policyBenifit, 
                                     drawbacks: policyDrawback});
}

// exports.readById = async(req, res) => {
//     const policy = await Policy.readById(req.params.id);
//     res.status(200).send(policy)
// }


exports.update = async(req, res) => {
    const policy = await Policy.update(req.body)
    if(!policy){
        res.render('admin_policy')
    }else{
        res.status(500).send({message: 'Error.'})
    }
}

exports.delete = async (req, res) => {
    const policy = await Policy.delete(req.body);

    if (!policy) {
         res.render('admin_policy')
    } else {
        res.status(500).send({ message: 'Error.' });
    }
}
exports.readById = async(req, res) => {
    const policy = await Policy.readById(req.body)
    res.render('update_policy',{records:null,recordid:policy})
}

exports.view = async(req, res) => {
    const policy = await Policy.view();
    res.render('admin_view_policy',{records:policy})
};

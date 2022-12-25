const PEU = require('../models/PolicyEndorseUser.model')
const Policy = require('../models/policy')
const Endorsement = require('../models/endorsement.model')
const User = require('../models/user.model')
exports.insert = async(req, res) => {
    const peu = await PEU.create(req.body)
    if(!peu){
        res.render('admin_peu')
    }else{
        res.status(500).send({message: 'Error.'})
    }
}

exports.read = async(req, res) => {
    const peu = await PEU.read();
    res.status(200).send(peu)
}
exports.addPage = async (re, res) => {
  const policy = await Policy.read();
  const user = await User.read();
  const endorsement = await Endorsement.read();
  res.render("admin_add_peu", { policy : policy , user : user , endorsement: endorsement});
};


exports.update = async(req, res) => {
    const peu = await PEU.update(req.params.id, req.body)

    if(!peu){
        res.status(200).send({message: 'Ok!'})
    }else{
        res.status(500).send({message: 'Error.'})
    }
}

exports.delete = async (req, res) => {
    const peu = await PEU.delete(req.params.id, req.body);

    if (!peu) {
        res.status(200).send({ message: 'Ok!' })
    } else {
        res.status(500).send({ message: 'Error.' });
    }
}

exports.view = async(req, res) => {
    const policy = await PEU.view();
    res.render('admin_view_peu',{records:policy})
};

// exports.readById = async(req, res) => {
//     const Payments = await Payments.readById(req.params.id)
//     res.status(200).send(Payments)
// }
module.exports = (app) => {
  app.get("/", function (req, res) {
    res.render("admin_dashboard");
  });

  //Policy routes
  const policyController = require("../controller/insurance_policy");
  app.get("/adminpolicy", function (req, res) {
    res.render("admin_policy");
  });
  app.route("/policy").post(policyController.insert).get(policyController.view);
  app.route("/policy/:id").post(policyController.update);
  app.route("/deletepolicy/:id").post(policyController.delete);
  app.route("/policybyid").post(policyController.readById);
  app.route("/admin-add-policy").get(policyController.addPage);
  app.route("/admin-update-policy").get(policyController.updatePage);
  app.route("/admin-delete-policy").get(policyController.deletePage);
  


  const policyBenifitController = require("../controller/insurance_policy_benifit");
    app.route("/admin-add-benefit").get(policyBenifitController.addPage);
    app.route("/benefit").post(policyBenifitController.insert).get(policyBenifitController.read);

  const policyDrawbackController = require("../controller/insurance_policy_drawback");
  app.route("/admin-add-drawback").get(policyDrawbackController.addPage);
  app.route("/drawback").post(policyDrawbackController.insert).get(policyDrawbackController.read);




  
  //cutomer routes
  const userController = require("../controller/user");
  app.get("/admincustomer", function (req, res) {
    res.render("admin_customer");
  });
  app.route("/customer").post(userController.insert).get(userController.read);
  app.route("/customer/:id").post(userController.update);
  app.route("/deletecustomer/:id").post(userController.delete);
  app.route("/custbyid").post(userController.readById);
  app.route("/admin-add-customer").get(userController.addPage);
  app.route("/admin-update-customer").get(userController.updatePage);
  app.route("/admin-delete-customer").get(userController.deletePage);


  //agent routes

  const agentController = require("../controller/agent");
  app.get("/adminagent", function (req, res) {
    res.render("admin_agent");
  });
  app.route("/agent").post(agentController.insert).get(agentController.read);
  app.route("/agent/:id").post(agentController.update)
  app.route("/deleteagent/:id").post(agentController.delete);
  app.route("/agentbyid").post(agentController.readById);
  app.route("/admin-add-agent").get(agentController.addPage);
  app.route("/admin-update-agent").get(agentController.updatePage);
  app.route("/admin-delete-agent").get(agentController.deletePage);
  
  //Endorsement routes

 const endorsementController = require("../controller/endorsements");
   app.get("/adminendorsement", function (req, res) {
    res.render("admin_endorsement");
  });
  app.route("/endorsement").post(endorsementController.insert).get(endorsementController.read);
  app.route("/deleteendorsement/:id").post(endorsementController.delete);
   app.route("/endorsement/:id").post(endorsementController.update)
  app.route("/endorsementbyid").post(endorsementController.readById);
  app.route("/admin-add-endorsement").get(endorsementController.addPage);
  app.route("/admin-update-endorsement").get(endorsementController.updatePage);
  app.route("/admin-delete-endorsement").get(endorsementController.deletePage);

//payment routes
  const paymentController = require("../controller/payment");
  app.get("/adminpayment", function (req, res) {
    res.render("admin_payment");
  });
  app.route("/payment").post(paymentController.insert).get(paymentController.read);
  app.route("/admin-add-payment").get(paymentController.addPage);
  
//cpa routes
  const cpaController = require("../controller/CustomerPolicyAgent");
  app.get("/admincpa", function (req, res) {
    res.render("admin_cpa");
  });
  app.route("/cpa").post(cpaController.insert).get(cpaController.view);
  app.route("/admin-add-cpa").get(cpaController.addPage);

//peu routes
  const peuController = require("../controller/PolicyEndorseUser");
  app.get("/adminpeu", function (req, res) {
    res.render("admin_peu");
  });
  app.route("/peu").post(peuController.insert).get(peuController.view);
  app.route("/admin-add-peu").get(peuController.addPage);

// app.route("/view").get(cpaController.view);

  

  

  // app.get("/admin-view-agent", function (req, res) {
  //   res.render("admin_view_agent");
  // });
  // app.get("/admin-add-agent", function (req, res) {
  //   res.render("admin_add_agent");
  // });
  // app.get("/admin-update-agent", function (req, res) {
  //   res.render("update_agent");
  // });
  // app.get("/admin-delete-agent", function (req, res) {
  //   res.render("admin_delete_agent");
  // });

  // app.get("/admin-update-customer", function (req, res) {
  //   res.render("admin_update_customer");
  // });
  // app.get("/admin-delete-customer", function (req, res) {
  //   res.render("admin_delete_customer");
  // });

  // app.get("/admin-view-endorsement", function (req, res) {
  //   res.render("admin_view_endorsement");
  // });
  // app.get("/admin-add-endorsement", function (req, res) {
  //   res.render("admin_add_endorsement");
  // });
 
  // app.get("/admin-delete-endorsement", function (req, res) {
  //   res.render("admin_delete_endorsement");
  // });

  // app.get("/update-agent", function (req, res) {
  //   res.render("update_agent");
  // });
  // app.get("/update-customer", function (req, res) {
  //   res.render("update_customer");
  // });
  // app.get("/update-endorsement", function (req, res) {
  //   res.render("update_endorsement");
  // });
  // app.get("/update-policy", function (req, res) {
  //   res.render("update_policy");
  // });

  // //Policy benifit routes

  // 
  // app
  //   .route("/policyben")
  //   .post(policyBenifitController.insert)
  //   .get(policyBenifitController.read);

  // app
  //   .route("/policyben/:id")
  //   .put(policyBenifitController.update)
  //   .delete(policyBenifitController.delete);

  // //Policy benifit routes

  // const policyDrawbackController = require("../controller/insurance_policy_drawback");

  // app
  //   .route("/policydraw")
  //   .post(policyDrawbackController.insert)
  //   .get(policyDrawbackController.read);

  // app
  //   .route("/policydraw/:id")
  //   .put(policyDrawbackController.update)
  //   .delete(policyDrawbackController.delete);

  // //agent routes
 
};
/**
 * BrokerFunctionsBoomController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const bcrypt = require("bcrypt");
const saltRounds = 10;
module.exports = {
  chkAuth: async function (req, res){
    const jwt=require("jsonwebtoken");
    var decoded;
    try {
        console.log("fin token1");
        decoded = jwt.verify(req.body.token, "private_key");
        return res.json({ "response": "success" });

      } catch(err) {
        console.log("fin token2");
        return res.json({ "response": "The user is not verified" });
      }
},
  formSubmissionBoom: async function(req, res) {
    bcrypt.hash(req.param("Password"), saltRounds, function(err,hashedPassword) 
    {
      if (req.param("Name") && req.param("Email") && req.param("Password") && req.param("Address") && req.param("City") &&
        req.param("Province") && req.param("Zip") && req.param("Phoneno") && req.param("Houseid") &&
        req.param("Mortgagevalue") && req.param("CompanyName")) 
        {
          var params = {
            emp_name: req.param("Name"),
            emp_address: req.param("Address"),
            emp_phone: req.param("Phoneno"),
            emp_email: req.param("Email"),
            emp_password: hashedPassword,
            emp_companyName: req.param("CompanyName"),
            applicationStatus: "Submitted",
            emp_city: req.param("City"),
            emp_province: req.param("Province"),
            emp_zip: req.param("Zip"),
            house_id: req.param("Houseid"),
            mortgage_value: req.param("Mortgagevalue")
          };
          Broker.create(params)
          .then(function(Broker){ 
            console.log(Broker);
            return  res.json({"response": "success" , id : Broker.id });
          })
          .catch(err => res.serverError(err));
      } else {
        res.badRequest("The request wasnot successful - Bad Request.");
      }
    });
  },

  getApplicationStatus: function(req, res) {
    if (req.param("AppNo")) {
      var appno = req.param("AppNo");
      Broker.find({ id: appno })
        .then(function(Broker) 
        {
          Broker = Broker[0];

          if (Broker == undefined) 
          {
            return res.json({ Message: "Wrong Application Number" });
          }
          else
          {
            return res.send(Broker);
          }
        })
        .catch({ name: "UsageError" }, function(err) {
          return res.json(err);
        })
        .catch(function(err) {
          return res.json(err);
        });
    } else {
      res.badRequest("The request wasnot successful - Bad Request.");
    }
  },


  loginAuthorization: async function (req, res) {
    debugger;

    var appno = req.body.app_no;
    var password = req.body.password;
   
    Broker.find({ id: appno })
      .then(function(Broker) 
      {
        console.log(Broker[0].emp_password);
        console.log(password);
        console.log(Broker[0]);
        bcrypt.compare(password, Broker[0].emp_password, function(err, valid) 
                    {
                        if(valid)
                        {
                          const jwt=require("jsonwebtoken");
                         // console.log(result[0]);
                          const token=jwt.sign(
                              {appno: req.body.app_no,
                                password: req.body.password
                              },
                              "private_key",
                              {expiresIn:"1h"}
                              );
                            return res.send({"Message":"Authoriztion approved" ,  token:token});
                        }
                        else
                        {
                            res.json({"Message": "Wrong Password"})   
                        }

                    });



      }).catch(function(err){
        return res.json({ "Message": "Invalid Application ID" });
      });
  

  
    }
  };

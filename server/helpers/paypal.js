const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AShoMhYAGz3KPrxr7HzABnGk9osOcieT1ndH1IfNEfHOL85mdOhs54nrVxmkscoGyv1GzE5YVVLxn7GQ",
  client_secret: "EKnn2uGEHqhhcktkGrFYzEBbef-ZCVQVI8FmYywTFyXwrcT9eLwrvXomp-qRs2CLZ4Db_toYQjle0xbi",
});

module.exports = paypal;

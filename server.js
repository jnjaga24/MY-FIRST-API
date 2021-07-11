var http = require("http");
var fs = require("fs");
var connect = require("connect");
var express = require("express");

var app = express();

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});
app.get("/", function (req, res) {
  var result = { html: '<svg onload="alert(123)">  </svg>' };
  // var result = {
  //   html: `<style type="text/css">#checkoutmodal .merchant-detail-box{background:#FFF !important}#checkoutmodal .popup-close, #checkoutmodal .btnBanks_Back{color:#005e9d !important}#checkoutmodal .security-info, #checkoutmodal .security-info .icon-info-circled{color:#005e9d !important}</style><script src="https://www.paynimo.com/paynimocheckout/client/lib/jquery.min.js" type="text/javascript"></script><script type="text/javascript" src="https://www.paynimo.com/paynimocheckout/server/lib/checkout.js"></script><script type="text/javascript">$(document).ready(function() {var configJson = {"tarCall":false,"features":{"showPGResponseMsg":true,"enableExpressPay":true,"enableNewWindowFlow":false,"payDetailsAtMerchantEnd":false},"consumerData":{"cartDescription":"{'payment_id':undefined}","deviceId":"WEBSH2","returnUrl":"http://rsgidev.cloware.com/api/v1/direct_payment/response?payment_id=PY000000000483","token":"2c30eea02425d3838f072e9ab48133fc56772d2d279836cfee05da362bb11e4b7a51820572fcdbaba630bc56f8bbc758a2879de92c5fb4c2fbd78270143122b0","paymentMode":"all","merchantLogoUrl":"https://www.paynimo.com/CompanyDocs/company-logo-md.png","merchantId":"T656223","bankCode":"","currency":"INR","consumerId":"123","consumerMobileNo":"9095809135","consumerEmailId":"gopal@godbtech.com","txnId":1625900423834,"items":[{"itemId":"FIRST","amount":"1","comAmt":"0"}],"customStyle":{"PRIMARY_COLOR_CODE":"#005e9d","SECONDARY_COLOR_CODE":"#FFFFFF","BUTTON_COLOR_CODE_1":"#2DC48D","BUTTON_COLOR_CODE_2":"#FFFFFF"}}};$.pnCheckout(configJson);if(configJson.features.enableNewWindowFlow){pnCheckoutShared.openNewWindow();}});</script>`,
  // };
  res.send(result);
});

var server = app.listen(5000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});

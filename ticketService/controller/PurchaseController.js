const express = require("express");
const Utils = require("../utils/utils");

var request = require("request");
const PurchaseService = require("../service/purchaseService");

const PurchaseRouter = express.Router();

PurchaseRouter.get("/:CorrespondingUserId", async (req, res, next) => {
  try {
    const result = await PurchaseService.getPurchaseByCorrespondingUserId(
      req.params.CorrespondingUserId
    );
    res.status(200).json({
      msg: "success",
      data: result,
    });
  } catch (err) {
    next(err);
  }
});

PurchaseRouter.post("/", async (req, res, next) => {
  try {
    //todo uncomment this line
    // await Utils.verifyJwtFromCookie(req);
    const firstName = req.body.first_name;
    const lastName = req.body.last_name;
    const flightId = req.body.ticket_id;
    console.log("buyer : " + firstName + " " + lastName);
    console.log("flightId: " + flightId);
    res.status(200).json({});
  } catch (err) {
    next(err);
  }
});


module.exports = PurchaseRouter;

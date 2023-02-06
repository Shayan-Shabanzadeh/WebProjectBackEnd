const express = require("express");
const PurchaseService = require("./../service/PurchaseService");

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

module.exports = PurchaseRouter;

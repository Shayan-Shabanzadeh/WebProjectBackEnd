const express = require("express");
const AirCraftService = require("../service/airCraftLayoutService");
const AircraftLayoutRouter = express.Router();
const Utils = require("../utils/utils");

AircraftLayoutRouter.get("/:type_id", async (req, res, next) => {
  try {
    //jwt verification

    const isValid = await Utils.verifyJwtFromCookie(req);
    // if (isValid === false) {
    //   const err = new Error("invalid token");
    //   err.status = 403;
    //   throw err;
    // }

    //create bank trasnaction

    // const r = await Utils.createTransaction({
    //   amount: 10000,
    //   receipt_id: 1,
    //   callback: "localhost:3000",
    // });

    // get a transaction from bank
    const response = await Utils.getTransactionWithId(1);
    console.log(response);

    //
    const result = await AirCraftService.getAirCraftLayoutByLayoutId(
      req.params.type_id
    );
    res.status(200).json({
      msg: "success",
      data: result,
    });
  } catch (e) {
    next(e);
  }
});

module.exports = AircraftLayoutRouter;

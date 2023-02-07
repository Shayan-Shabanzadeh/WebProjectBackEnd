const express = require("express");
const AirCraftService = require("../service/airCraftLayoutService");
const AircraftLayoutRouter = express.Router();
const {
  verifyJwtFromCookie,
  getTransactionWithId,
  createTransaction,
} = require("../utils/utils");

AircraftLayoutRouter.get("/:type_id", async (req, res, next) => {
  try {
    //jwt verification

    const isValid = await verifyJwtFromCookie(req);
    if (isValid === false) {
      const err = new Error("invalid token");
      err.status = 403;
      throw err;
    }

    //create bank trasnaction 

    const r = await createTransaction({
      amount: 10000,
      receipt_id: 1,
      callback: "localhost:3000",
    });

    if (r.statusCode === 201) {
      console.log("transaction created");
      console.log(r);
    } else {
      const err = new Error("Failed to create transaction");
      err.status = r.statusCode;
      throw err;
    }

    // get a transaction from bank 
    const response = await getTransactionWithId(1);
    if (response.statusCode === 200) {
      console.log("transaction found")
      console.log(response.body);
    }else{
      const err = new Error("Failed to get transaction ");
      err.status = r.statusCode;
      throw err;
    }

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

const express = require("express");
const PurchaseService = require("./../service/PurchaseService");

const PurchaseRouter = express.Router();

// PurchaseRouter.get("/", (req, res, next) => {
//     res.status(200).json({
//         msg: "success",
//     });
// });

// PurchaseRouter.post("/", (req, res, next) => {
//     const Purchase = req.body.Purchase;
//     res.status(200).json({
//         msg: "success",
//         Purchase: Purchase,
//     });
// });

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

// PurchaseRouter.get("/flight/:flightMode&:origin&:destination&:PassengerNumber&:startDate&:finishDate&:flightType", async (req, res, next) => {
//     try {
//         const result = await PurchaseService.filterFlightPurchase(req.params.flightMode,req.params.origin,req.params.destination,req.params.PassengerNumber,req.params.startDate,req.params.finishDate,req.params.flightType);
//         res.status(200).json({
//             msg: "success",
//             data: result,
//         });
//     } catch (err) {
//         next(err);
//     }
// });

module.exports = PurchaseRouter;

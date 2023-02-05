const express = require("express");
const AircraftService = require("./../service/AircraftService");

const AircraftRouter = express.Router();

AircraftRouter.get("/:registration_id", async (req, res, next) => {
  try {
    const result = await AircraftService.getAircraftByRegistrationId(
      req.params.registration_id
    );
    res.status(200).json({
      msg: "success",
      data: result,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = AircraftRouter;

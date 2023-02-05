const express = require("express");
const AirportService = require("./../service/AirportService");

const AirportRouter = express.Router();

AirportRouter.get("/:iata_code", async (req, res, next) => {
    try {
        const result = await AirportService.getAirportByIataCode(
            req.params.iata_code
        );
        res.status(200).json({
            msg: "success",
            data: result,
        });
    } catch (err) {
        next(err);
    }
});

module.exports = AirportRouter;

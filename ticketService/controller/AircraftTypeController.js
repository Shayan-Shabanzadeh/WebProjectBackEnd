const express = require("express");
const AircraftTypeService = require("./../service/AircraftTypeService");

const AircraftTypeRouter = express.Router();

AircraftTypeRouter.get("/:type_id", async (req, res, next) => {
    try {
        const result = await AircraftTypeService.getAircraftTypeById(
            req.params.type_id
        );
        res.status(200).json({
            msg: "success",
            data: result,
        });
    } catch (err) {
        next(err);
    }
});


module.exports = AircraftTypeRouter;

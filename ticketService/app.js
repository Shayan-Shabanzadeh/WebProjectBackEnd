const http = require("http");
const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const PurchaseRouter = require("./controller/PurchaseController");
const AircraftRouter = require("./controller/AircraftController");
const AircraftTypeRouter = require("./controller/AircraftTypeController");
const AirportRouter = require("./controller/AirportController");
const AircraftLayoutController = require("./controller/aircraftLayoutController");
const CountryController = require("./controller/CountryController");
const CityController = require("./controller/CityController");
const FlightController = require("./controller/FlightController");
const logger = require("./utils/Logger");
const { init_db, Flight } = require("./entity/entities");

dotenv.config();
const port = process.env.PORT || 9000;
const app = express();

const initApp = () => {
  //login middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan("dev"));
    // body parser middleware

  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(bodyParser.json());

  // app.use(cors);
  // core errors handlers
  // app.use((req, res, next) => {
  //   res.header("Access-Control-Allow-Origin", "*");
  //   res.header(
  //     "Access-Control-Allow-Headers",
  //     "Origin, X-Requested-With",
  //     "Content-Type",
  //     "Accept",
  //     "Authorization"
  //   );

  //   if (req.method === "OPTIONS") {
  //     res.header(
  //       "Access-Control-Allow-Methods",
  //       "PUT , POST, GET,DELETE , PATH"
  //     );

  //     return res.statusCode(200).json({});
  //   }
  //   next();
  // });
 

  //routers
  
  app.use("ticket-service/purchase", PurchaseRouter);
  app.use("ticket-service/aircraft", AircraftRouter);
  app.use("ticket-service/aircraft_type", AircraftTypeRouter);
  app.use("ticket-service/aircraftLayout", AircraftLayoutController);
  app.use("ticket-service/airport", AirportRouter);
  app.use("ticket-service/flight", FlightController);
  app.use("ticket-service/country", CountryController);
  app.use("ticket-service/city", CityController);
  //cookie parser

  //error handler
  app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  });
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    if (res.status === 500) {
      logger.error(error);
      res.json({
        error: {
          message: "Something went wrong.",
        },
      });
    } else {
      res.json({
        error: {
          message: error.message,
        },
      });
    }
  });
};

const createServer = () => {
  init_db();
  initApp();
  const server = http.createServer(app);
  server.listen(port);
  logger.info("server listening on port " + port);
};

createServer();

exports = { logger };

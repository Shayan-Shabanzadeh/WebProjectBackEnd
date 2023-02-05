const http = require("http");
const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const PurchaseRouter = require("./controller/PurchaseController");
const AircraftLayoutController = require('./controller/aircraftLayoutController')
const logger = require("./utils/Logger");
const { init_db } = require("./entity/entities");

dotenv.config();
const port = process.env.PORT || 9000;
const app = express();

const initApp = () => {
  //login middleware
  app.use(morgan("dev"));
  //body parser middleware
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  //core errors handlers
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With",
      "Content-Type",
      "Accept",
      "Authorization"
    );

    if (req.method === "OPTIONS") {
      res.header(
        "Access-Control-Allow-Methods",
        "PUT , POST, GET,DELETE , PATH"
      );

      return res.statusCode(200).json({});
    }
    next();
  });



  
  //routers
  app.use("/purchase", PurchaseRouter);
  app.use('/aircraftLayout',AircraftLayoutController);
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

exports = {logger };

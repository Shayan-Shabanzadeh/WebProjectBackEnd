const http = require("http");
const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const Sequelize = require("sequelize");
const PurchaseRouter = require("./controller/PurchaseController");
const models = require("./models");
const logger = require("./utils/Logger");

dotenv.config();
const port = process.env.PORT || 9000;
const app = express();
var sequelize = undefined;

const initDatabase = async () => {
  models.sequelize
    .authenticate()
    .then(() => {
      logger.info("Connection has been established successfully.");
    })
    .catch((error) => {
      console.error("Unable to connect to the database: ", error);
      return;
    });

  try {
    await models.sequelize.sync();
    logger.info("All tables has been created successfully.");
    return models.sequelize;
  } catch (error) {
    logger.error("Unable to connect to the database: ", error);
  }
};

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
  sequelize = initDatabase();
  initApp();
  const server = http.createServer(app);
  server.listen(port);
  logger.info("server listening on port " + port);
};

createServer();

exports = { sequelize, logger };

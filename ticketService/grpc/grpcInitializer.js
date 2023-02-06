const grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");
const logger = require("./../utils/Logger");
const PROTO_PATH = "./auth_service.proto";

const GRPC_PORT = process.env.GRPC_PORT || 4000;
const GRPC_SERVER = process.env.GRPC_SERVER || "localhost";

const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};
logger.info(`connected to auth server on ${GRPC_SERVER}:${GRPC_PORT}`);

var packageDefinition = protoLoader.loadSync(PROTO_PATH, options);
const GprcAuthService =
  grpc.loadPackageDefinition(packageDefinition).GprcAuthService;
const client = new GprcAuthService(
  `localhost:4000`,
  grpc.credentials.createInsecure()
);

module.exports = client;

const client = require("../grpc/grpcInitializer");
const logger = require("../utils/Logger");

function verifyJwt(jwtToken) {
  const req = {
    jwt_token: jwtToken,
  };
  return new Promise ((resolve, reject) => {
    client.JwtIsValid(req, (error, isValid) => {
    if (error) reject(error);
    else resolve(isValid);
  })

})
}

module.exports = { verifyJwt };

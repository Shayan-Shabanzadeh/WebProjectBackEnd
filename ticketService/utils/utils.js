const client = require("../grpc/grpcInitializer");

const verifyJwtFromCookie = async (req) => {
  try {
    const acces_token = getAccessToken(req);
    console.log("Access token:" + acces_token);
    const result = await verifyJwt(acces_token);
    return result;
  } catch (e) {
    return false;
  }
};

function verifyJwt(jwtToken) {
  if (jwtToken === null || jwtToken === undefined) {
    const err = new Error("Access token is not provided");
    err.status = 403;
    throw err;
  }

  const req = {
    jwt_token: jwtToken,
  };

  result = new Promise((resolve, reject) => {
    client.JwtIsValid(req, (error, JwtIsValidResponse) => {
      if (error) reject(error);
      else resolve(JwtIsValidResponse.isValid);
    });
  });
  return result;
}

function getAccessToken(req) {
  var cookie = req.headers.cookie;
  if (cookie === null || cookie === undefined) {
    const err = new Error("Access token is not provided");
    err.status = 403;
    throw err;
  }
  const cookies = cookie.split("; ");
  var acces_token = null;
  cookies.forEach((cookie) => {
    values = cookie.split("=");
    if (values[0] === "access_token") {
      acces_token = values[1];
    }
  });
  if (acces_token === null || acces_token === undefined) {
    const err = new Error("Access token is not provided");
    err.status = 403;
    throw err;
  }

  return acces_token;
}

module.exports = { verifyJwt, getAccessToken, verifyJwtFromCookie };

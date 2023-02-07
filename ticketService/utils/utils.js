const client = require("../grpc/grpcInitializer");
const request = require("request");

const BANK_URL = process.env.BANK_URL || "http://127.0.0.1:8000/";

const callGetTransactionFromBankApi = async (id) => {
  return new Promise((resolve, reject) => {
    request(BANK_URL + id, { json: true }, (err, res) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
};

const callAddTransactionFromBankApi = async (FormData) => {
  return new Promise((resolve, reject) => {
    request.post(
      {
        url: BANK_URL,
        body: FormData,
        json: true,
      },
      function (error, response) {
        if (error) reject(error);
        else resolve(response);
      }
    );
  });
};

const createTransaction = async (FormData) => {
  const result = await callAddTransactionFromBankApi(FormData);
  return { body: result.body, statusCode: result.statusCode };
};

const getTransactionWithId = async (id) => {
  const result = await callGetTransactionFromBankApi(id);
  return { body: result.body, statusCode: result.statusCode };
};

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

module.exports = {
  verifyJwt,
  getAccessToken,
  verifyJwtFromCookie,
  getTransactionWithId,
  createTransaction,
};

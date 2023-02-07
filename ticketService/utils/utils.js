const client = require("../grpc/grpcInitializer");
const request = require("request");

const BANK_URL = process.env.BANK_URL || "http://127.0.0.1:8000/";

class Utils {
  callGetTransactionFromBankApi = async (id) => {
    return new Promise((resolve, reject) => {
      request(BANK_URL + id, { json: true }, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  };

  callAddTransactionFromBankApi = async (FormData) => {
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

  createTransaction = async (FormData) => {
    const result = await this.callAddTransactionFromBankApi(FormData);
    if (result.statusCode === 201) {
      return result.body;
    } else {
      const err = new Error(
        "Failed to create transaction :" + JSON.stringify(FormData)
      );
      err.status = result.statusCode;
      throw err;
    }
  };

  getTransactionWithId = async (id) => {
    const result = await this.callGetTransactionFromBankApi(id);
    if (result.statusCode === 200) {
      return result.body;
    } else {
      const err = new Error("Failed to get transaction with id : " + id);
      err.status = result.statusCode;
      throw err;
    }
    // return { body: result.body, statusCode: result.statusCode };
  };

  verifyJwtFromCookie = async (req) => {
    try {
      const acces_token = this.getAccessToken(req);
      // console.log("Access token:" + acces_token);
      const result = await this.verifyJwt(acces_token);
      if (!result) {
        const err = new Error("Token is expired or not valid.");
        err.status = 403;
        throw err;
      }
      return result;
    } catch (e) {
      throw e;
    }
  };

  verifyJwt = (jwtToken) => {
    if (jwtToken === null || jwtToken === undefined) {
      const err = new Error("Access token is not provided");
      err.status = 403;
      throw err;
    }

    const req = {
      jwt_token: jwtToken,
    };

    const result = new Promise((resolve, reject) => {
      client.JwtIsValid(req, (error, JwtIsValidResponse) => {
        if (error) reject(error);
        else resolve(JwtIsValidResponse.isValid);
      });
    });
    return result;
  };

  getAccessToken = (req) => {
    var cookie = req.headers.cookie;
    if (cookie === null || cookie === undefined) {
      const err = new Error("Access token is not provided");
      err.status = 403;
      throw err;
    }
    const cookies = cookie.split("; ");
    var acces_token = null;
    cookies.forEach((cookie) => {
      var values = cookie.split("=");
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
  };
}

module.exports = new Utils();

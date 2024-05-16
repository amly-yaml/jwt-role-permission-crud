import "dotenv/config";
import jwt from "jsonwebtoken";
import { error } from "../traits/api-response.js";

const validateToken = function (req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json(error("", "Token not present"));
  }
  try {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json(error("", err.message));
      } else {
        // const token = JSON.parse(user);
        // console.log("token: ", token);
        if (user.aud === process.env.JWT_AUDIENCE) {
          req.user = user;
          console.log("Token verify and middleware is working.");
        } else {
          return res.status(403).json(error("", err.message));
        }
      }
    });
  } catch (err) {
    res
      .status(401)
      .type("json")
      .send(JSON.stringify(error([], "Missing or invalid token")));
    return;
  }
  next();
};

export default validateToken;

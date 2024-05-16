import Authentication from "../services/authentication-service.service.js";
import { success, error } from "../traits/api-response.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

class AuthenticationController {
  async logInAuth(req, res) {
    const user_data = req.body;

    try {
      const username = user_data.username;
      const password = user_data.password;
      const authentication = new Authentication();
      const result = await authentication.loginUser(username, password);
      if (username === result.username && password === result.password) {
        const jwtToken = jwt.sign(
          {
            userid: result.userid,
            roleid: result.roleid,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "7d",
            audience: process.env.JWT_AUDIENCE,
          }
        );
        return res
          .status(200)
          .json(success(jwtToken, `Successfully login to database.`));
      } else {
        return res
          .status(200)
          .json(error([], `'username' and 'password' do not correct.`));
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json(error([], `${err.message}`));
    }
  }
}

export default AuthenticationController;

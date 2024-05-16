import express from "express";
import bodyParser from "body-parser";
import validateToken from "../middleware/verify-token.js";
import { RetrieveDataController } from "../controllers/retrieve-controller.controller.js";
import CreateDataController from "../controllers/create-controller.controller.js";
import UpdateDataController from "../controllers/update-controller.controller.js";
import DeleteDataController from "../controllers/delete-controller.controller.js";
import AuthenticationController from "../controllers/authentication-controller.controller.js";
import RoleAndPermission from "../middleware/role-permission-table.js";

const retrieveDataController = new RetrieveDataController();
const createDataController = new CreateDataController();
const updateDataController = new UpdateDataController();
const deleteDataService = new DeleteDataController();
const authenticationController = new AuthenticationController();
const roleAndPermission = new RoleAndPermission();

const app = express();

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/api/log-in", authenticationController.logInAuth);

app.post(
  "/api/create-user-data",
  [validateToken],
  [roleAndPermission.createRolePermission],
  createDataController.createData
);

app.post(
  "/api/retrieve-data",
  [validateToken],
  [roleAndPermission.readRolePermission],
  retrieveDataController.retrieveData
);

app.post(
  "/api/update-user-data",
  [validateToken],
  [roleAndPermission.updateRolePermission],
  updateDataController.updateData
);

app.post(
  "/api/delete-user-data",
  [validateToken],
  [roleAndPermission.deleteRolePermission],
  deleteDataService.deleteData
);

export default app;

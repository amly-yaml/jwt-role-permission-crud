import initializeModels from "../models/index.js";
import { error, success } from "../traits/api-response.js";

class RoleAndPermission {
  createRolePermission = async (req, res, next) => {
    const user_data = req.body;
    const roleId = req.user.roleid;
    const tableName = user_data.table_name;
    const result = await this.checkTablePermission(roleId, tableName);
    if (result === null) {
      console.log(`Permission does not set on ${tableName} table.`);
    } else {
      const createPermission = result.create;
      if (createPermission) {
        console.log("create permission.");
        next();
        // return res
        //   .status(200)
        //   .json(success(createPermission, `Create Permission.`));
      } else {
        return res
          .status(404)
          .json(error(createPermission, `Create Permission Denied.`));
      }
    }
  };

  readRolePermission = async (req, res, next) => {
    const user_data = req.body;
    const roleid = req.user.roleid;
    const tableName = user_data.table_name;
    const result = await this.checkTablePermission(roleid, tableName);
    if (result === null) {
      console.log(`Permission does not set on ${tableName} table.`);
      next();
    } else {
      const readPermission = result.read;
      if (readPermission) {
        console.log("read permission.");
        next();
      } else {
        return res
          .status(404)
          .json(error(readPermission, `Read Permission Denied.`));
      }
    }
  };

  updateRolePermission = async (req, res, next) => {
    const user_data = req.body;
    const roleid = req.user.roleid;
    const tableName = user_data.table_name;
    const result = await this.checkTablePermission(roleid, tableName);

    if (result === null) {
      console.log(`Permission does not set on ${tableName} table.`);
      next();
    } else {
      const updateState = result.update;
      if (updateState) {
        console.log("update permission.");
        next();
      } else {
        return res
          .status(404)
          .json(error(updateState, `Update Permission Denied.`));
      }
    }
  };

  deleteRolePermission = async (req, res, next) => {
    const user_data = req.body;
    const roleid = req.user.roleid;
    const tableName = user_data.table_name;
    const result = await this.checkTablePermission(roleid, tableName);
    if (result === null) {
      console.log(`Permission does not set on ${tableName} table.`);
      next();
    } else {
      const deletePermission = result.delete;
      if (deletePermission) {
        console.log("Delete permission.");
        next();
      } else {
        return res
          .status(404)
          .json(error(deletePermission, `Delete Permission Denied.`));
      }
    }
  };

  checkTablePermission = async (roleId, tableName) => {
    const rolePermisssionModel = initializeModels();
    const getPermission = await rolePermisssionModel.rolepermissions.findOne({
      where: {
        roleid: roleId,
        tablename: tableName,
      },
    });
    //console.log(getPermission);
    if (getPermission !== null) {
      return getPermission;
    } else {
      return null;
    }
  };
}

export default RoleAndPermission;

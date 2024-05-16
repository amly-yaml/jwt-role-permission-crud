import { DataTypes } from "sequelize";

const rolePermission = (database) => {
  database.define(
    "rolepermissions",
    {
      rolepermissionid: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      roleid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tablename: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      create: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      read: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      update: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      delete: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      tableName: "rolepermissions",
      timestamps: false,
    }
  );
};

export default rolePermission;

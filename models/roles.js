import { DataTypes } from "sequelize";

const roles = (database) => {
  database.define(
    "roles",
    {
      roleid: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      rolename: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: "roles",
      timestamps: false,
    }
  );
};

export default roles;

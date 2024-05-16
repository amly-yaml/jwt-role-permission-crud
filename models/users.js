import { DataTypes } from "sequelize";

const users = (database) => {
  database.define(
    "users",
    {
      userid: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      roleid: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      userstatus: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      createdate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "users",
      timestamps: true,
      createdAt: "createdate",
      updatedAt: false,
    }
  );
};

export default users;

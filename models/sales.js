import { DataTypes } from "sequelize";

const sales = (database) => {
  database.define(
    "sales",
    {
      saleid: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      orderitemid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      costValue: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createddate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "sales",
      timestamps: true,
      createdAt: "createddate",
      updatedAt: false,
    }
  );
};

export default sales;

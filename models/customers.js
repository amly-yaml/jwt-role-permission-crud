import { DataTypes } from "sequelize";

const customers = (database) => {
  database.define(
    "customers",
    {
      customerid: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      customername: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "customers",
      timestamps: true,
      createdAt: "createdate",
      updatedAt: false,
    }
  );
};

export default customers;

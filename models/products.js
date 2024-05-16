import { DataTypes } from "sequelize";

const products = (database) => {
  database.define(
    "products",
    {
      productid: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      productname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createddate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "products",
      timestamps: true,
      createdAt: "createddate",
      updatedAt: false,
    }
  );
};

export default products;

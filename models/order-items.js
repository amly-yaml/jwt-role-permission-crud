import { DataTypes } from "sequelize";

const orderItem = (database) => {
  database.define(
    "orderitems",
    {
      orderItemid: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      orderid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      productid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createddate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "orderitems",
      timestamps: true,
      createdAt: "createddate",
      updatedAt: false,
    }
  );
};

export default orderItem;

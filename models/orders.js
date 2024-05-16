import { DataTypes } from "sequelize";

const orders = (database) => {
  database.define(
    "orders",
    {
      productid: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      customerid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "orders",
      timestamps: true,
      createdAt: "createdate",
      updatedAt: false,
    }
  );
};

export default orders;

import database from "../config/database.js";
import roles from "./roles.js";
import users from "./users.js";
import orderItem from "./order-items.js";
import orders from "./orders.js";
import customers from "./customers.js";
import products from "./products.js";
import sales from "./sales.js";
import rolePermission from "./role-permissions.js";
import association from "./association.js";

const initializeModels = () => {
  const models = [
    roles,
    rolePermission,
    users,
    customers,
    products,
    orders,
    orderItem,
    sales,
  ];
  for (let model of models) {
    model(database);
  }
  association(database);
  //console.log("Model", database.models); //Model { role: role, user: user }
  return database.models;
};

export default initializeModels;

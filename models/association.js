const association = (database) => {
  const { users, roles } = database.models;

  console.log("usersAssociation: ", users, "rolesAssociation: ", roles);

  roles.hasMany(users, {
    foreignKey: "roleid",
  });

  users.belongsTo(roles, {
    foreignKey: "roleid",
  });
};

export default association;

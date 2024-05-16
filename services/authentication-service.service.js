import initializeModels from "../models/index.js";

class Authentication {
  models;
  constructor() {
    this.models = initializeModels();
  }
  async loginUser(username) {
    const result = await this.models.users.findOne({
      where: { username: username },
      include: this.models.roles,
    });
    //console.log("login result: ", result);
    return result;
  }
}

export default Authentication;

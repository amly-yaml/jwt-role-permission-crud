import initializeModels from "../models/index.js";

export class RetrieveDataService {
  models;
  constructor() {
    this.models = initializeModels(); //this.models = { roles: roles, users: users }
  }

  async retrieveData(tableName, column_name, look_up) {
    const results = await this.models[tableName].findAll({
      where: { [column_name]: look_up },
    });
    return results;
  }
}

import Models from "../models/index.js";

class CreateDataService {
  models;
  constructor() {
    this.models = Models();
  }

  async createData(tableName, data) {
    const result = await this.models[tableName].create(data);
    return result;
  }
}

export default CreateDataService;

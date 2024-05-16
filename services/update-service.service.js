import Models from "../models/index.js";

class UpdateDataService {
  models;
  constructor() {
    this.models = Models();
  }
  async updateData(tableName, data, columnname, lookup) {
    const result = await this.models[tableName].update(data, {
      where: { [columnname]: lookup },
    });
    return result;
  }
}

export default UpdateDataService;

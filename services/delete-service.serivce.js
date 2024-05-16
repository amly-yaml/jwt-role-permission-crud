import initializeModels from "../models/index.js";

class DeleteDataService {
  models;
  constructor() {
    this.models = initializeModels();
  }

  async deleteData(tableName, columnName, lookup) {
    const result = await this.models[tableName].destroy({
      where: { [columnName]: lookup },
    });
    return result;
  }
}

export default DeleteDataService;

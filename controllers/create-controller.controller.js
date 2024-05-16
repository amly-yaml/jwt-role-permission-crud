import CreateDataService from "../services/create-service.service.js";
import { success, error } from "../traits/api-response.js";

class CreateDataController {
  async createData(req, res) {
    const userData = req.body;

    try {
      const tableName = userData.table_name;
      const data = userData.data;
      const createDataService = new CreateDataService();
      const result = await createDataService.createData(tableName, data);
      return res.status(200).json(success(result, "Create Data Successfully."));
    } catch (err) {
      console.log(err);
      return res.status(500).json(error([], `${err.message}`));
    }
  }
}

export default CreateDataController;

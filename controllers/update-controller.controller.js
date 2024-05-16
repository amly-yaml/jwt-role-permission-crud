import UpdateDataService from "../services/update-service.service.js";
import { success, error } from "../traits/api-response.js";

class UpdateDataController {
  async updateData(req, res) {
    const user_data = req.body;
    try {
      const tableName = user_data.table_name;
      const data = user_data.data;
      const columnname = user_data.column_name;
      const lookup = user_data.look_up;
      const updateDataService = new UpdateDataService();
      const result = await updateDataService.updateData(
        tableName,
        data,
        columnname,
        lookup
      );
      return res.status(200).json(success(result, `Update Data Successfully.`));
    } catch (err) {
      console.log(err);
      return res.status(500).json(error([], `${err.message}`));
    }
  }
}

export default UpdateDataController;

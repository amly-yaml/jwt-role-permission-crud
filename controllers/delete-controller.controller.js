import DeleteDataService from "../services/delete-service.serivce.js";
import { success, error } from "../traits/api-response.js";

class DeleteDataController {
  async deleteData(req, res) {
    const user_data = req.body;

    try {
      const tableName = user_data.tableName;
      const columnName = user_data.column_name;
      const lookup = user_data.look_up;
      const deleteDataService = new DeleteDataService();
      const result = await deleteDataService.deleteData(
        tableName,
        columnName,
        lookup
      );
      return res.status(200).json(success(result, `Delete Data Successfully.`));
    } catch (err) {
      console.log(err);
      return res.status(500).json(error([], `${err.message}`));
    }
  }
}

export default DeleteDataController;

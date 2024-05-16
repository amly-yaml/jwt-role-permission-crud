import { RetrieveDataService } from "../services/retrieve-service.service.js";
import { success, error } from "../traits/api-response.js";

export class RetrieveDataController {
  async retrieveData(req, res) {
    const user_data = req.body;

    try {
      const tableName = user_data.table_name;
      const column_name = user_data.column_name;
      const lookup = user_data.lookup;
      const retrieveDataService = new RetrieveDataService();
      const results = await retrieveDataService.retrieveData(
        tableName,
        column_name,
        lookup
      );
      return res
        .status(200)
        .json(success(results, "Retrieve Data Successfully."));
    } catch (err) {
      console.log(err);
      return res.status(500).json(error([], `${err.message}`));
    }
  }
}

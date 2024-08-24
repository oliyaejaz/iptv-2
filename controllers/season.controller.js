import { SeasonService, } from "../services/index.js";
import { httpResponse } from "../utils/index.js";


export const SeasonController = {
	getAll: async (req, res) => {
		try {
			const data = await SeasonService.getAll();
			return httpResponse.SUCCESS(res, data);
		} catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},

	add: async (req, res) => {
		try {
			const data = await SeasonService.add(req.body);
			return httpResponse.CREATED(res, data);
		} catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},
    getById: async (req, res) => {
		try {
		  const { id } = req.params;
		  const data = await SeasonService.getById(id);
		  if (!data) {
			return httpResponse.NOT_FOUND(res, 'Season not found');
		  }
		  return httpResponse.SUCCESS(res, data);
		} catch (error) {
		  return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	  },

	update: async (req, res) => {
		try {
		  const { id } = req.params;
		  const data = await SeasonService.update(id, req.body);
		  if (!data) {
			return httpResponse.NOT_FOUND(res, 'Season not found');
		  }
		  return httpResponse.SUCCESS(res, data);
		} catch (error) {
		  return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	  },
	
	  delete: async (req, res) => {
		try {
		  const { id } = req.params;
		  const data = await SeasonService.delete(id);
		  if (!data) {
			return httpResponse.NOT_FOUND(res, 'Season not found');
		  }
		  return httpResponse.SUCCESS(res, { message: 'Season deleted successfully' });
		} catch (error) {
		  return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},
	
};

  


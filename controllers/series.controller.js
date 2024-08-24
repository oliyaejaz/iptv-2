import { SeriesService, } from "../services/index.js";
import { httpResponse } from "../utils/index.js";


export const SeriesController = {
	getAll: async (req, res) => {
		try {
			const data = await SeriesService.getAll();
			return httpResponse.SUCCESS(res, data);
		} catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},

	add: async (req, res) => {
		try {
			const data = await SeriesService.add(req.body);
			return httpResponse.CREATED(res, data);
		} catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},
    getById: async (req, res) => {
		try {
		  const { id } = req.params;
		  const data = await SeriesService.getById(id);
		  if (!data) {
			return httpResponse.NOT_FOUND(res, 'User not found');
		  }
		  return httpResponse.SUCCESS(res, data);
		} catch (error) {
		  return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	  },

	update: async (req, res) => {
		try {
		  const { id } = req.params;
		  const data = await SeriesService.update(id, req.body);
		  if (!data) {
			return httpResponse.NOT_FOUND(res, 'User not found');
		  }
		  return httpResponse.SUCCESS(res, data);
		} catch (error) {
		  return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	  },
	
	  delete: async (req, res) => {
		try {
		  const { id } = req.params;
		  const data = await SeriesService.delete(id);
		  if (!data) {
			return httpResponse.NOT_FOUND(res, 'User not found');
		  }
		  return httpResponse.SUCCESS(res, { message: 'User deleted successfully' });
		} catch (error) {
		  return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},
	
};

  


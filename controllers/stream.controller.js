import { StreamService } from "../services/index.js";
import { httpResponse } from "../utils/index.js";

export const StreamController = {
	getAll: async (req, res) => {
		try {
			const data = await StreamService.getAll();
			return httpResponse.SUCCESS(res, data);
		} catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},

	add: async (req, res) => {
		try {
			const data = await StreamService.add(req.body);
			return httpResponse.CREATED(res, data);
		} catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},
    getById: async (req, res) => {
		try {
		  const { id } = req.params;
		  const data = await StreamService.getById(id);
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
		  const data = await StreamService.update(id, req.body);
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
		  const data = await StreamService.delete(id);
		  if (!data) {
			return httpResponse.NOT_FOUND(res, 'User not found');
		  }
		  return httpResponse.SUCCESS(res, { message: 'User deleted successfully' });
		} catch (error) {
		  return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},
	
};

  


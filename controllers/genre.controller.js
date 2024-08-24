import { GenreService, } from "../services/index.js";
import { httpResponse } from "../utils/index.js";

export const GenreController = {
	getAll: async (req, res) => {
		try {
			const data = await GenreService.getAll();
			return httpResponse.SUCCESS(res, data);
		} catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},

	add: async (req, res) => {
		try {
			const data = await GenreService.add(req.body);
			return httpResponse.CREATED(res, data);
		} catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},
    getById: async (req, res) => {
		try {
		  const { id } = req.params;
		  const data = await GenreService.getById(id);
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
		  const data = await GenreService.update(id, req.body);
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
		  const data = await GenreService.delete(id);
		  if (!data) {
			return httpResponse.NOT_FOUND(res, 'User not found');
		  }
		  return httpResponse.SUCCESS(res, { message: 'User deleted successfully' });
		} catch (error) {
		  return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},
	
};

  


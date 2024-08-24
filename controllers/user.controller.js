import { UserService } from "../services/index.js";
import { httpResponse } from "../utils/index.js";

export const UserController = {
	getAll: async (req, res) => {
		try {
			const data = await UserService.getAll();
			return httpResponse.SUCCESS(res, data);
		} catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},

	add: async (req, res) => {
		try {
			const data = await UserService.add(req.body);
			return httpResponse.CREATED(res, data);
		} catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},
	getById: async (req, res) => {
		try {
		  const { id } = req.params;
		  const data = await UserService.getById(id);
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
		  const data = await UserService.update(id, req.body);
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
		  const data = await UserService.delete(id);
		  if (!data) {
			return httpResponse.NOT_FOUND(res, 'User not found');
		  }
		  return httpResponse.SUCCESS(res, { message: 'User deleted successfully' });
		} catch (error) {
		  return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},
	
};

  


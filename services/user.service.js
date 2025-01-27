import { UserModel } from "../models/index.js";

export const UserService = {
	getAll: async () => {
		return UserModel.find();
	},

	add: async (body) => {
		return UserModel.create(body);
	},
	

	getById: async (id) => {
		return await UserModel.findById(id);
	},

	
		  
	update: async (id, body) => {
		return UserModel.findByIdAndUpdate(id, body, { new: true });
	  },
	
	  delete: async (id) => {
		return UserModel.findByIdAndDelete(id);
	},	  
};







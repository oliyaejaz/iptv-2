import { StreamModel } from "../models/index.js";

export const StreamService = {
	getAll: async () => {
		return StreamModel.find();
	},

	add: async (body) => {
		retStream.create(body);
	},
	

	getById: async (id) => {
		return awStream.findById(id);
	},

	
		  
	update: async (id, body) => {
		retStream.findByIdAndUpdate(id, body, { new: true });
	  },
	
	  delete: async (id) => {
		retStream.findByIdAndDelete(id);
	},	  
};







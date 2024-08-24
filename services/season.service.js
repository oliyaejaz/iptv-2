import { SeasonsModel} from "../models/index.js";

export const SeasonService = {
	getAll: async () => {
		return  SeasonsModel.find();
	},

	add: async (body) => {
		return  SeasonsModel.create(body);
	},

	getById: async (id) => {
		return await SeasonsModel.findById(id);
	},

	
		  
	update: async (id, body) => {
		return SeasonsModel.findByIdAndUpdate(id, body, { new: true });
	  },
	
	  delete: async (id) => {
		return SeasonsModel.findByIdAndDelete(id);
	},	  
};
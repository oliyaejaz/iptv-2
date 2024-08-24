import { SeriesModel} from "../models/index.js";

export const SeriesService = {
	getAll: async () => {
		return  SeriesModel.find();
	},

	add: async (body) => {
		return  SeriesModel.create(body);
	},

	getById: async (id) => {
		return await SeriesModel.findById(id);
	},

	
		  
	update: async (id, body) => {
		return SeriesModel.findByIdAndUpdate(id, body, { new: true });
	  },
	
	  delete: async (id) => {
		return SeriesModel.findByIdAndDelete(id);
	},	  
};
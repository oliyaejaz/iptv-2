import { EpisodeModel} from "../models/index.js";

export const EpisodeService = {
	getAll: async () => {
		return  EpisodeModel.find();
	},

	add: async (body) => {
		return  EpisodeModel.create(body);
	},

	getById: async (id) => {
		return await EpisodeModel.findById(id);
	},

	
		  
	update: async (id, body) => {
		return EpisodeModel.findByIdAndUpdate(id, body, { new: true });
	  },
	
	  delete: async (id) => {
		return EpisodeModel.findByIdAndDelete(id);
	},	  
};
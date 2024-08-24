import { GenreModel} from "../models/index.js";

export const GenreService = {
	getAll: async () => {
		return  GenreModel.find();
	},

	add: async (body) => {
		return  GenreModel.create(body);
	},

	getById: async (id) => {
		return await GenreModel.findById(id);
	},

	
		  
	update: async (id, body) => {
		return GenreModel.findByIdAndUpdate(id, body, { new: true });
	  },
	
	  delete: async (id) => {
		return GenreModel.findByIdAndDelete(id);
	},	  
};
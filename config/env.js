export const env = {
	port: process.env.PORT || 2022,
	nodeEnv: process.env.NODE_ENV || "development",
	mongodbUri: process.env.DB_URI || "mongodb://127.0.0.1:27017/iptv-backend",
	jwtSecret: process.env.JWT_SECRET || "oliya",
};

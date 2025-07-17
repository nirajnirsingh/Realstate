import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Setup __dirname manually
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from parent folder
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const URI = process.env.MONGO_URI;
console.log("MONGO_URI =", URI); // Confirm it's loaded

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;

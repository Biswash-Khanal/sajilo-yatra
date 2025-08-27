import mongoose from "mongoose";

export async function ConnectDB(database_uri) {
  try {
    await mongoose.connect(database_uri);
    console.log("Connected to database successfully!");
  } catch (error) {
    console.log(error.message);
  }
}

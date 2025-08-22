//this is the config.js file
import dotenv from "dotenv";
if (process.env.NODE_ENV !== "production") dotenv.config();

function checkAndFetchEnvironmentVariables(
  variableName,
  defaultValue = undefined,
  required = false
) {
  const value = process.env[variableName] ?? defaultValue;

  if (required === true && (value === "" || value == null)) {
    throw new Error(
      `Couldnt find the specified environment variable ${variableName}, please check your files!`,
      { cause: "env var missing" }
    );
  }

  return value;
}

export const env = {
  port: checkAndFetchEnvironmentVariables("PORT", 5000, true),
  mongoUri: checkAndFetchEnvironmentVariables("MONGODB_URI", "", true),
};

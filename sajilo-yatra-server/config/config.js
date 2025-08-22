import dotenv from "dotenv";

//*     dotenv is only configured if the node environment is not set to "production"
if (process.env.NODE_ENV !== "production") dotenv.config();

// *    function to check and fetch the environment variables
//     throws an error if the environment variable is not found,
//     or in case it is set to null||undefined
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

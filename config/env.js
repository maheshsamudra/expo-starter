import Constants from "expo-constants";

const envVars = {
  local: {
    apiBaseUrl: "https://apiurl.com",
    firebaseConfig: {},
  },
  staging: {
    apiBaseUrl: "https://apiurl.com",
    firebaseConfig: {},
  },
  production: {
    apiBaseUrl: "https://apiurl.com",
    firebaseConfig: {},
  },
};

let env = envVars?.[Constants?.expoConfig?.extra?.STAGE || "staging"] || {};

if (process.env.NODE_ENV === "development") {
  env = envVars?.["local"];
}

export default env;

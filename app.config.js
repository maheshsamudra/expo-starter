const version = "1.0.0";
const buildNumber = 1;

export default {
  expo: {
    name: "expo-starter",
    slug: "expo-starter",
    version: `${version}`,
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    scheme: "com.ms.expo.starter.app",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.ms.expo.starter.app",
      buildNumber: `${buildNumber}`,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.ms.expo.starter.app",
      versionCode: buildNumber,
    },
    web: {
      favicon: "./assets/favicon.png",
      // bundler: "metro", // Enable this if you want to support web
    },
    extra: {
      eas: {
        projectId: "", // fill this when you are ready to build with eas. Running eas build will display the instructions.
      },
    },
  },
};

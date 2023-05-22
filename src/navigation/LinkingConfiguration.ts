import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "./types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      Root: {
        screens: {
          home: {
            screens: {
              HomeScreen: "home",
            },
          },
          detail: {
            screens: {
              DetailScreen: "detail",
            },
          },
        },
      },
    },
  },
};

export default linking;

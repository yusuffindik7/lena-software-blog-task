import { useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Navigation from "./src/navigation/index";

import { BlogListProvider } from "./src/context/blogListContext";

function App() {
  const colorScheme = useColorScheme();

  return (
    <BlogListProvider>
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
      </SafeAreaProvider>
    </BlogListProvider>
  );
}

export default App;

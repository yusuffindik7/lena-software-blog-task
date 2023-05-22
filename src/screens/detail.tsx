import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Text, View } from "../components/Themed";
import BlogPostItem from "../components/BlogPostItem";

import { BlogListContext, useContext } from "../context/blogListContext";

import { Feather } from "@expo/vector-icons";
import Constants from "expo-constants";

export default function DetailScreen() {
  const navigation = useNavigation();
  const dataDetail = useContext(BlogListContext);

  return (
    <SafeAreaView>
      <View style={styles.StatusBar}>
        <StatusBar
          animated={false}
          translucent
          backgroundColor="#000"
          barStyle={"light-content"}
          showHideTransition={"fade"}
          hidden={false}
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>MaestroCR</Text>
        <TouchableOpacity
          style={styles.goBack}
          activeOpacity={0.8}
          hitSlop={30}
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" color={"white"} size={20} />
          <Text style={{ color: "#fff" }}>Geri Dön</Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: "100%" }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <BlogPostItem isDetail {...dataDetail.detail} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  title: {
    fontFamily: "Baskerville-Bold",
    fontWeight: "bold",
    fontSize: 28,
    color: "#fff",
  },

  StatusBar: {
    height: Constants.statusBarHeight,
    backgroundColor: "rgba(30, 60, 180, 0.85)",
    width: "100%",
    position: "absolute",
    borderBottomWidth: 0.8,
    borderColor: "#fff",
  },

  header: {
    backgroundColor: "rgba(30, 60, 180, 0.9)",
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 12,
    paddingRight: 12,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
  },

  goBack: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});

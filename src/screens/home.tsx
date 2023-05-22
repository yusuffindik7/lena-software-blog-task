import { useState, useCallback } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  StatusBar,
  RefreshControl,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Constants from "expo-constants";
import { Feather } from "@expo/vector-icons";

import { Text, View } from "../components/Themed";
import FleetsFeed from "../components/Fleets";
import Feed from "../components/Feed";

export default function HomeScreen() {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("detail");
  };

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
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
        <TouchableOpacity activeOpacity={0.8}>
          <Feather name="search" color={"white"} size={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.page}>
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={() => <FleetsFeed />}
          ListFooterComponent={() => <Feed />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  StatusBar: {
    height: Constants.statusBarHeight,
    backgroundColor: "rgba(30, 60, 180, 0.85)",
    width: "100%",
    position: "absolute",
    borderBottomWidth: 0.8,
    borderColor: "#fff",
  },

  container: {
    backgroundColor: "#fff",
    lightColor: "#fff",
    darkColor: "rgba(255,255,255,0.1)",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
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

  page: {
    flex: 1,
  },

  title: {
    fontFamily: "Baskerville-Bold",
    fontWeight: "bold",
    fontSize: 28,
    color: "#fff",
  },
});

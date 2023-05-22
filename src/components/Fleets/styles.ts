import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontWeight: "bold",
    fontSize: 24,
    padding: 10,
    color: "rgba(0, 30, 180, 1)",
  },

  flatlist: {
    flexDirection: "column",
  },

  button: {
    padding: 5,
  },

  playButton: {
    width: 75,
    height: 35,
    borderRadius: 50,
    alignItems: "center",
    backgroundColor: "rgba(0, 30, 180, .8)",
    marginRight: 10,
    justifyContent: "center",
  },

  buttonText: {
    color: "white",
  },
});

export default styles;

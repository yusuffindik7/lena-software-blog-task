import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  fleetContainer: {
    marginLeft: 5,
    paddingBottom: 5,
  },

  fleetTitleBackground: {
    position: "absolute",
    bottom: 10,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: "rgba(50, 50, 50, 0.6)",
    width: "90%",
    height: 40,
  },

  fleetTitle: {
    color: "#fff",
    padding: 5,
    fontSize: 12,
  },

  blogFooter: {
    justifyContent: "space-between",
    flexDirection: "row",
  },

  readMore: {
    fontWeight: "bold",
  },

  readingTime: {
    fontSize: 12,
  },

  blog: {
    paddingBottom: 10,
    gap: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  blogDetail: {
    paddingBottom: 10,
    gap: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: "100%",
  },

  content: {
    borderTopWidth: 1,
    padding: 10,
    gap: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  background: {
    padding: 10,
    borderBottomWidth: 0.2,
  },

  backgroundDetail: {
    padding: 10,
  },

  blogTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  
  button: {
    padding: 5,
  },
});

export default styles;

import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  BlogListContext,
  useData,
  useContext,
} from "../../context/blogListContext";

import { Text } from "../Themed";
import styles from "./styles";

import BlogPostItem from "../BlogPostItem";

const Feed = () => {
  const { data } = useData();

  const dataDetail = useContext(BlogListContext);

  const navigation = useNavigation();

  return (
    <>
      <Text style={styles.title}>Discover</Text>
      <FlatList
        contentContainerStyle={styles.flatlist}
        alwaysBounceVertical
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={() => (
              dataDetail.setDetail(item), navigation.navigate("detail")
            )}
          >
            <BlogPostItem isDiscover {...item} key={item.postId} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.postId}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};
export default Feed;

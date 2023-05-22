import React, { useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Text, View } from "../Themed";
import MarqueeView from "react-native-marquee-view";
import styles from "./styles";

import {
  useData,
  useContext,
  BlogListContext,
} from "../../context/blogListContext";

import BlogPostItem from "../BlogPostItem";

const FleetsFeed = () => {
  const navigation = useNavigation();

  const { data } = useData();
  const dataDetail = useContext(BlogListContext);

  const [startStop, setStartStop] = useState("Play");
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Quick Fleets</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            startStop == "Play"
              ? (setIsPlaying(true), setStartStop("Stop"))
              : (setIsPlaying(false), setStartStop("Play"));
          }}
        >
          <View style={styles.playButton}>
            <Text style={styles.buttonText}>{startStop}</Text>
          </View>
        </TouchableOpacity>
      </View>
      {startStop == "Stop" ? (
        <MarqueeView autoPlay={false} playing={isPlaying}>
          <FlatList
            horizontal
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.button}
                onPress={() => (
                  dataDetail.setDetail(item), navigation.navigate("detail")
                )}
              >
                <BlogPostItem isFleet {...item} key={item.postId} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.postId}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        </MarqueeView>
      ) : (
        <FlatList
          horizontal
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.button}
              onPress={() => (
                dataDetail.setDetail(item), navigation.navigate("detail")
              )}
            >
              <BlogPostItem isFleet {...item} key={item.postId} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.postId}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </>
  );
};

export default FleetsFeed;

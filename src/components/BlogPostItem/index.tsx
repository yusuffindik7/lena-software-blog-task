import { useState } from "react";

import { Text, View } from "../Themed";
import styles from "./styles";

import Banner from "../Banner";

export interface ItemProps {
  title: string;
  banner: string;
  summary?: string;
  createdAt?: string;
  totalReadingTime?: number;
  isFleet?: boolean;
  isDetail?: boolean;
  isDiscover?: boolean;
}

const BlogPostItem = (item: ItemProps) => {
  const [show] = useState(item.isFleet);
  const [showDetail] = useState(item.isDetail);
  const [showDiscover] = useState(item.isDiscover);

  return (
    <>
      {show ? (
        <View style={styles.fleetContainer}>
          <View>
            <Banner
              borderWidth={1}
              borderColor="rgba(0, 30, 190, 0.8)"
              width={160}
              height={120}
              image={item.banner}
            />
            <View style={styles.fleetTitleBackground}>
              <Text style={styles.fleetTitle}>{item.title}</Text>
            </View>
          </View>
        </View>
      ) : null}
      {showDiscover ? (
        <View style={styles.blog}>
          <View style={styles.background}>
            <Banner
              width={"100%"}
              borderTopLeftRadius={20}
              borderTopRightRadius={20}
              height={180}
              image={item.banner}
            />
            <View style={styles.content}>
              <Text style={styles.blogTitle}>{item.title}</Text>
              <Text>
                {item.summary.substring(0, 160)}...{" "}
                <Text style={styles.readMore}>Read More</Text>
              </Text>
              <View style={styles.blogFooter}>
                <Text style={styles.readingTime}>{item.createdAt}</Text>
                <Text style={styles.readingTime}>
                  {item.totalReadingTime} min read
                </Text>
              </View>
            </View>
          </View>
        </View>
      ) : null}
      {showDetail ? (
        <View style={styles.blogDetail}>
          <View style={styles.backgroundDetail}>
            <Banner
              width={"100%"}
              borderTopLeftRadius={20}
              borderTopRightRadius={20}
              height={220}
              image={item.banner}
            />
            <View style={styles.content}>
              <View style={styles.blogFooter}>
                <Text style={styles.readingTime}>{item.createdAt}</Text>
                <Text style={styles.readingTime}>
                  {item.totalReadingTime} min read
                </Text>
              </View>
              <Text style={styles.blogTitle}>{item.title}</Text>
              <Text>{item.summary}</Text>
            </View>
          </View>
        </View>
      ) : null}
    </>
  );
};

export default BlogPostItem;

import { Image } from "react-native";

export type BannerProps = {
  image?: string;
  borderWidth?: number;
  borderColor?: string;
  borderRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderBottomRadius?: number;
  width?: number | string;
  height?: number;
};

const Banner = ({
  borderWidth,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderRadius,
  borderColor,
  image,
  width,
  height,
}: BannerProps) => {
  return (
    <Image
      source={{ uri: image }}
      style={{
        width: width,
        height: height,
        borderRadius,
        borderTopLeftRadius,
        borderTopRightRadius,
        borderWidth,
        borderColor,
      }}
    />
  );
};

export default Banner;

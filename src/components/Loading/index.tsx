import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Text } from "../Themed";

// @ts-ignore
import { spline } from "@georgedoescode/spline";

import {
  Canvas,
  LinearGradient,
  Path,
  useClockValue,
  useComputedValue,
  useValue,
  vec,
} from "@shopify/react-native-skia";
import { createNoise2D } from "simplex-noise";

function createPoints() {
  const points = [];
  const numPoints = 6;
  const angleStep = (Math.PI * 2) / numPoints;
  const rad = 110;

  for (let i = 1; i <= numPoints; i++) {
    const theta = i * angleStep;

    const x = 130 + Math.cos(theta) * rad;
    const y = 130 + Math.sin(theta) * rad;

    points.push({
      x: x,
      y: y,

      originX: x,
      originY: y,

      noiseOffsetX: Math.random() * 1000,
      noiseOffsetY: Math.random() * 1000,
    });
  }

  return points;
}

function map(
  n: number,
  start1: number,
  end1: number,
  start2: number,
  end2: number
) {
  return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
}

export const Loading = () => {
  const clock = useClockValue();
  const points = useValue(createPoints());
  const hueNoiseOffset = useValue(0);
  const noise = createNoise2D();
  const noiseStep = 0.005;

  const animate = () => {
    const newPoints = [];

    for (let i = 0; i < points.current.length; i++) {
      const point = points.current[i];

      const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
      const nY = noise(point.noiseOffsetY, point.noiseOffsetY);

      const x = map(nX, -1, 1, point.originX - 20, point.originX + 20);
      const y = map(nY, -1, 1, point.originY - 20, point.originY + 20);

      point.x = x;
      point.y = y;

      point.noiseOffsetX += noiseStep;
      point.noiseOffsetY += noiseStep;

      newPoints.push(point);
    }

    points.current = newPoints;
  };

  const path = useComputedValue(() => {
    animate();
    return spline(points.current, 1, true);
  }, [clock]);

  const colorNoise = useComputedValue(() => {
    hueNoiseOffset.current += noiseStep / 2;
    const hueNoise = noise(hueNoiseOffset.current, hueNoiseOffset.current);
    const newValue = map(hueNoise, -1, 1, 0, 360);
    return vec(256, newValue);
  }, [clock]);

  return (
    <SafeAreaView style={styles.container}>
      <Canvas style={styles.canvas}>
        <Path path={path}>
          <LinearGradient
            start={vec(0, 0)}
            end={colorNoise}
            colors={["blue", "aqua"]}
          />
        </Path>
      </Canvas>
      <Text style={styles.text}>MaestroCR...</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  canvas: {
    height: 275,
    width: 275,
  },
  text: {
    fontWeight: "bold",
    color: "white",
    position: "absolute",
  },
});

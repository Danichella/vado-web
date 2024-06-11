import { loadingStyles } from '@/assets/styles/loadingStyles';
import { colors } from '@/constants/Colors';
import React, { useEffect, useRef } from 'react';
import { View, Animated, Easing } from 'react-native';

interface Props {
  size: number;
  color?: string;
}

const startRotationAnimation = (rotationDegree: Animated.Value): void => {
  Animated.loop(
    Animated.timing(rotationDegree, {
      toValue: 360,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    })
  ).start();
};

export const LoadingSpinner = ({
  size,
  color = colors.loading.default,
}: Props): JSX.Element => {
  const rotationDegree = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startRotationAnimation(rotationDegree);
  }, [rotationDegree]);

  return (
    <View
      style={[loadingStyles.container, { width: size, height: size }]}
      accessibilityRole="progressbar"
    >
      <View
        style={[
          loadingStyles.background,
          { borderColor: color, borderRadius: size / 2 },
        ]}
      />
      <Animated.View
        style={[
          loadingStyles.progress,
          { borderTopColor: color, borderRadius: size / 2 },
          {
            transform: [
              {
                rotateZ: rotationDegree.interpolate({
                  inputRange: [0, 360],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
          },
        ]}
      />
    </View>
  );
};

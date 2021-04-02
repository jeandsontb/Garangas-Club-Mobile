import React, {useEffect} from 'react';
import {View, StyleSheet, Animated} from 'react-native';

export default () => {
  const AnimatedValue = new Animated.Value(0);

  useEffect(() => {
    circleAnimated();

    return () => circleAnimated();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const circleAnimated = () => {
    AnimatedValue.setValue(0);

    Animated.timing(AnimatedValue, {
      toValue: 1,
      duration: 450,
      useNativeDriver: false,
    }).start(() =>
      setTimeout(() => {
        circleAnimated();
      }, 800),
    );
  };

  const translateX = AnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-80, 80],
  });

  setTimeout(() => {
    circleAnimated();
  }, 800);

  return (
    <>
      <View style={styled.boxImage}>
        <Animated.View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: '18%',
            height: '100%',
            opacity: 0.2,
            backgroundColor: '#FFF',
            transform: [{translateX: translateX}],
          }}
        />
      </View>
    </>
  );
};

const styled = StyleSheet.create({
  boxImage: {
    backgroundColor: 'rgba(245, 255, 250, 0.50)',
    width: 70,
    height: 70,
    borderRadius: 5,
    marginLeft: -70,
    overflow: 'hidden',
  },
});

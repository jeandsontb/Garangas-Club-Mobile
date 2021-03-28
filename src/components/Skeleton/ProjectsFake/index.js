import React, {useEffect} from 'react';
import {View, StyleSheet, Dimensions, Animated} from 'react-native';

const {width} = Dimensions.get('window');

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
    outputRange: [-80, 230],
  });

  const translateX2 = AnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-80, 380],
  });

  setTimeout(() => {
    circleAnimated();
  }, 800);

  return (
    <>
      {/* <View style={styled.headerTextFake}>
        <Animated.View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: '10%',
            height: '100%',
            opacity: 0.2,
            backgroundColor: '#FFF',
            transform: [{translateX: translateX2}],
          }}
        />
      </View>
      <View style={styled.headerTextFakeTwo}>
        <Animated.View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: '10%',
            height: '100%',
            opacity: 0.2,
            backgroundColor: '#FFF',
            transform: [{translateX: translateX}],
          }}
        />
      </View>

      <View style={styled.boxHeaderImageFake}>
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
      </View> */}

      <View style={styled.boxCoverProject}>
        <View style={styled.coverProject}>
          <Animated.View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: '10%',
              height: '100%',
              opacity: 0.2,
              backgroundColor: '#FFF',
              transform: [{translateX: translateX}],
            }}
          />
        </View>
      </View>
    </>
  );
};

const styled = StyleSheet.create({
  boxCoverProject: {
    marginRight: 10,
    marginTop: 20,
    width: 110,
    height: 160,
    overflow: 'hidden',
  },
  coverProject: {
    position: 'absolute',
    borderRadius: 6,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(191, 135, 86, 0.95)',
    overflow: 'hidden',
  },
});

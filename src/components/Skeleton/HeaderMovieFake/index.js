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
      <View style={styled.headerTextFake}>
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
      </View>
    </>
  );
};

const styled = StyleSheet.create({
  headerTextFake: {
    backgroundColor: '#BF8756',
    height: 15,
    width: '90%',
    borderRadius: 5,
    marginBottom: 4,
    overflow: 'hidden',
  },
  headerTextFakeTwo: {
    alignSelf: 'flex-start',
    backgroundColor: '#BF8756',
    height: 15,
    width: width / 2,
    marginLeft: '5%',
    borderRadius: 5,
    marginBottom: 4,
    overflow: 'hidden',
  },
  boxHeaderImageFake: {
    marginTop: 10,
    marginBottom: -50,
    borderWidth: 2,
    width: 220,
    height: 120,
    borderColor: '#FFFFFF',
    borderRadius: 10,
    backgroundColor: 'rgba(191, 135, 86, 0.95)',
    overflow: 'hidden',
  },
});

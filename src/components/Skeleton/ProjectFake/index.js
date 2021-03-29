import React, {useEffect} from 'react';
import {View, StyleSheet, Dimensions, Animated, ScrollView} from 'react-native';

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
    outputRange: [-80, width],
  });

  setTimeout(() => {
    circleAnimated();
  }, 800);

  return (
    <>
      <View style={styled.boxContentProject}>
        <ScrollView style={styled.scrollBoxProject}>
          <View style={styled.boxProject}>
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

          <View style={styled.boxProject}>
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

          <View style={styled.boxProject}>
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

          <View style={styled.boxProject}>
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
        </ScrollView>
      </View>
    </>
  );
};

const styled = StyleSheet.create({
  boxContentProject: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 20,
  },
  scrollBoxProject: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  boxProject: {
    marginBottom: 10,
    width: '100%',
    height: 130,
    borderRadius: 10,
    backgroundColor: 'rgba(191, 135, 86, 0.95)',
    overflow: 'hidden',
  },
});

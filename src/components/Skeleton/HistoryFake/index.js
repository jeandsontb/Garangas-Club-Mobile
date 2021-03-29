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
    outputRange: [-80, width],
  });

  setTimeout(() => {
    circleAnimated();
  }, 800);

  return (
    <>
      <View style={styled.boxImageContent}>
        <Animated.View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: '20%',
            height: '100%',
            opacity: 0.2,
            backgroundColor: '#FFF',
            transform: [{translateX: translateX}],
          }}
        />
      </View>

      <View style={styled.boxTextHistory}>
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
      <View style={styled.separatorHistory}>
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
      <View style={styled.textHistory}>
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
      <View style={styled.textHistory}>
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
      <View style={styled.textHistory}>
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
      <View style={styled.textHistory}>
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
      <View style={styled.textHistory}>
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
      <View style={styled.textHistory}>
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
      <View style={styled.textHistoryFinal}>
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
    </>
  );
};

const styled = StyleSheet.create({
  boxImageContent: {
    backgroundColor: '#BF8756',
    overflow: 'hidden',
    width: '100%',
    height: 140,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  boxTextHistory: {
    backgroundColor: '#BF8756',
    overflow: 'hidden',
    width: '65%',
    marginTop: 20,
    height: 25,
    marginLeft: 10,
    borderRadius: 4,
  },
  separatorHistory: {
    backgroundColor: '#BF8756',
    overflow: 'hidden',
    width: '85%',
    height: 4,
    marginTop: 5,
    marginLeft: 10,
    borderRadius: 2,
    marginBottom: 25,
  },
  textHistory: {
    backgroundColor: '#BF8756',
    overflow: 'hidden',
    width: '95%',
    marginLeft: 10,
    marginRight: 15,
    borderRadius: 4,
    marginTop: 5,
    height: 20,
  },
  textHistoryFinal: {
    backgroundColor: '#BF8756',
    overflow: 'hidden',
    width: '55%',
    marginLeft: 10,
    marginRight: 15,
    borderRadius: 4,
    marginTop: 5,
    height: 20,
  },
});

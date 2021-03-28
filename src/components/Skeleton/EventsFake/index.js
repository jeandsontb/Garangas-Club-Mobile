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
    outputRange: [-80, 230],
  });

  const translateXTitle = AnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-80, 400],
  });

  setTimeout(() => {
    circleAnimated();
  }, 800);

  return (
    <>
      <View style={styled.boxEventDetail}>
        <View style={styled.eventImage}>
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
        <View style={styled.boxRighEvent}>
          <View style={styled.contentTitle}>
            <Animated.View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                width: '10%',
                height: '100%',
                opacity: 0.2,
                backgroundColor: '#FFF',
                transform: [{translateX: translateXTitle}],
              }}
            />
          </View>
          <View style={styled.contentDescription}>
            <Animated.View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                width: '10%',
                height: '100%',
                opacity: 0.2,
                backgroundColor: '#FFF',
                transform: [{translateX: translateXTitle}],
              }}
            />
          </View>
          <View style={styled.contentDescriptionTwo}>
            <Animated.View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                width: '10%',
                height: '100%',
                opacity: 0.2,
                backgroundColor: '#FFF',
                transform: [{translateX: translateXTitle}],
              }}
            />
          </View>
          <View style={styled.contentDate}>
            <Animated.View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                width: '10%',
                height: '100%',
                opacity: 0.2,
                backgroundColor: '#FFF',
                transform: [{translateX: translateXTitle}],
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
};

const styled = StyleSheet.create({
  boxEventDetail: {
    flexDirection: 'row',
    backgroundColor: '#f5fffa',
    width: '100%',
    height: 'auto',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    overflow: 'hidden',
  },
  eventImage: {
    backgroundColor: 'rgba(191, 135, 86, 0.95)',
    width: 110,
    height: 80,
    borderRadius: 6,
    overflow: 'hidden',
  },
  boxRighEvent: {
    flex: 1,
    marginLeft: 10,
  },
  contentTitle: {
    width: '100%',
    height: 20,
    borderRadius: 3,
    backgroundColor: 'rgba(191, 135, 86, 0.95)',
    overflow: 'hidden',
  },
  contentDescription: {
    width: '100%',
    height: 14,
    marginTop: 8,
    borderRadius: 3,
    backgroundColor: 'rgba(191, 135, 86, 0.95)',
    overflow: 'hidden',
  },
  contentDescriptionTwo: {
    width: '60%',
    height: 12,
    marginTop: 4,
    borderRadius: 3,
    backgroundColor: 'rgba(191, 135, 86, 0.95)',
    overflow: 'hidden',
  },
  contentDate: {
    width: '50%',
    height: 14,
    marginTop: 8,
    borderRadius: 3,
    backgroundColor: 'rgba(191, 135, 86, 0.95)',
    overflow: 'hidden',
  },
});

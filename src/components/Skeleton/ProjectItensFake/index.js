import React, {useEffect} from 'react';
import {View, StyleSheet, Animated, Dimensions, ScrollView} from 'react-native';

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

  const translateXThumb = AnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, 60],
  });

  setTimeout(() => {
    circleAnimated();
  }, 800);

  return (
    <>
      <View style={styled.boxBackgroundImage}>
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

      <ScrollView style={styled.BoxThumbImages} horizontal={true}>
        <View style={styled.thumbImages}>
          <Animated.View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: '10%',
              height: '100%',
              opacity: 0.2,
              backgroundColor: '#FFF',
              transform: [{translateX: translateXThumb}],
            }}
          />
        </View>
        <View style={styled.thumbImages}>
          <Animated.View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: '10%',
              height: '100%',
              opacity: 0.2,
              backgroundColor: '#FFF',
              transform: [{translateX: translateXThumb}],
            }}
          />
        </View>
        <View style={styled.thumbImages}>
          <Animated.View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: '10%',
              height: '100%',
              opacity: 0.2,
              backgroundColor: '#FFF',
              transform: [{translateX: translateXThumb}],
            }}
          />
        </View>
        <View style={styled.thumbImages}>
          <Animated.View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: '10%',
              height: '100%',
              opacity: 0.2,
              backgroundColor: '#FFF',
              transform: [{translateX: translateXThumb}],
            }}
          />
        </View>
        <View style={styled.thumbImages}>
          <Animated.View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: '10%',
              height: '100%',
              opacity: 0.2,
              backgroundColor: '#FFF',
              transform: [{translateX: translateXThumb}],
            }}
          />
        </View>
        <View style={styled.thumbImages}>
          <Animated.View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: '10%',
              height: '100%',
              opacity: 0.2,
              backgroundColor: '#FFF',
              transform: [{translateX: translateXThumb}],
            }}
          />
        </View>
      </ScrollView>

      <View style={styled.boxDetailView}>
        <View style={styled.textProject}>
          <Animated.View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: '8%',
              height: '100%',
              opacity: 0.2,
              backgroundColor: '#FFF',
              transform: [{translateX: translateX}],
            }}
          />
        </View>
        <View style={styled.textTitle}>
          <Animated.View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: '8%',
              height: '100%',
              opacity: 0.2,
              backgroundColor: '#FFF',
              transform: [{translateX: translateX}],
            }}
          />
        </View>
        <View style={styled.textDescription}>
          <Animated.View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: '8%',
              height: '100%',
              opacity: 0.2,
              backgroundColor: '#FFF',
              transform: [{translateX: translateX}],
            }}
          />
        </View>
        <View style={styled.textDescription}>
          <Animated.View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: '8%',
              height: '100%',
              opacity: 0.2,
              backgroundColor: '#FFF',
              transform: [{translateX: translateX}],
            }}
          />
        </View>
        <View style={styled.textDescription}>
          <Animated.View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: '8%',
              height: '100%',
              opacity: 0.2,
              backgroundColor: '#FFF',
              transform: [{translateX: translateX}],
            }}
          />
        </View>
        <View style={styled.textDescription}>
          <Animated.View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: '8%',
              height: '100%',
              opacity: 0.2,
              backgroundColor: '#FFF',
              transform: [{translateX: translateX}],
            }}
          />
        </View>
        <View style={styled.textDescriptionTwo}>
          <Animated.View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: '8%',
              height: '100%',
              opacity: 0.2,
              backgroundColor: '#FFF',
              transform: [{translateX: translateX}],
            }}
          />
        </View>
        <View style={styled.textFutureProjects}>
          <Animated.View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: '8%',
              height: '100%',
              opacity: 0.2,
              backgroundColor: '#FFF',
              transform: [{translateX: translateX}],
            }}
          />
        </View>
        <View style={styled.textFutureProjectsTwo}>
          <Animated.View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: '8%',
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
  boxBackgroundImage: {
    width: '100%',
    height: 240,
    backgroundColor: 'rgba(191, 135, 86, 0.95)',
    overflow: 'hidden',
  },
  BoxThumbImages: {
    width: '100%',
    paddingTop: 8,
    paddingLeft: 10,
    paddingRight: 10,
  },
  thumbImages: {
    marginRight: 4,
    width: 60,
    height: 90,
    borderRadius: 4,
    backgroundColor: 'rgba(191, 135, 86, 0.95)',
    overflow: 'hidden',
  },
  boxDetailView: {
    backgroundColor: '#f5fffa',
    borderRadius: 6,
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 25,
    padding: 10,
    height: 500,
  },
  textProject: {
    width: '85%',
    height: 28,
    borderRadius: 5,
    backgroundColor: 'rgba(191, 135, 86, 0.95)',
    overflow: 'hidden',
  },
  textTitle: {
    marginTop: 10,
    marginBottom: 15,
    width: 200,
    height: 25,
    borderRadius: 5,
    backgroundColor: 'rgba(191, 135, 86, 0.95)',
    overflow: 'hidden',
  },
  textDescription: {
    width: '100%',
    marginTop: 3,
    height: 20,
    borderRadius: 5,
    backgroundColor: 'rgba(191, 135, 86, 0.95)',
    overflow: 'hidden',
  },
  textDescriptionTwo: {
    width: width - 220,
    marginTop: 3,
    height: 20,
    borderRadius: 5,
    backgroundColor: 'rgba(191, 135, 86, 0.95)',
    overflow: 'hidden',
  },
  textFutureProjects: {
    width: '100%',
    marginTop: 40,
    height: 20,
    borderRadius: 5,
    backgroundColor: 'rgba(191, 135, 86, 0.95)',
    overflow: 'hidden',
  },
  textFutureProjectsTwo: {
    width: 220,
    marginTop: 3,
    height: 16,
    borderRadius: 5,
    backgroundColor: 'rgba(191, 135, 86, 0.95)',
    overflow: 'hidden',
  },
});

import React from 'react';
import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

const TabArea = styled.View`
  flex-direction: row;
  background-color: #bf8756;
  padding-left: 120px;
`;

const ButtonHome = styled.TouchableHighlight`
  position: absolute;
  z-index: 99;
  justify-content: center;
  align-items: center;
  width: ${props => (props.onActive === true ? 120 : 100)}px;
  height: 70px;
  background-color: #8c2f1b;
  margin-top: -20px;
  border-top-right-radius: 35px;
  border-bottom-right-radius: 35px;
`;

const ButtonTabs = styled.TouchableHighlight`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-top-color: #8c2f1b;
  background-color: ${props =>
    props.onActive === true ? '#BF8756' : '#BF8756'};
`;
const TextButtonHome = styled.Text`
  color: #ffffff;
`;

const IconHome = styled.Image`
  width: 50px;
  height: 50px;
`;

//########################################################################## Fim Styled ######

const IconAnimatable = Animatable.createAnimatableComponent(IconHome);
const ButtonIconAnimate = Animatable.createAnimatableComponent(ButtonHome);
const ButtonTabsAnimate = Animatable.createAnimatableComponent(ButtonTabs);

export default ({state, descriptors, navigation}) => {
  return (
    <TabArea>
      {state.routes.map((route, index) => {
        const options = descriptors[route.key].options;

        let labelName = route.name;
        if (options.tabBarLabel !== undefined) {
          labelName = options.tabBarLabel;
        } else if (options.title !== undefined) {
          labelName = options.title;
        }

        //  para pegar se o botão está ativo
        let buttonActive = state.index === index;

        // pega a tab pelo pressionar do botão
        const handleTabPress = () => {
          navigation.navigate(route.name);
        };

        // condição para diferenciar o estilo de um determinado botão
        if (route.name === 'HomeGarangas') {
          return (
            <ButtonIconAnimate
              key={index}
              onActive={buttonActive}
              underlayColor="none"
              onPress={handleTabPress}
              animation="fadeInLeft"
              useNativeDriver
              iterationCount={1}>
              <IconAnimatable
                source={require('../../assets/logo.png')}
                animation="tada"
                useNativeDriver
                iterationCount={3}
              />
              {/* <TextButtonHome>{labelName}</TextButtonHome> */}
            </ButtonIconAnimate>
          );
        } else {
          return (
            <ButtonTabsAnimate
              key={index}
              onActive={buttonActive}
              underlayColor="transparent"
              onPress={handleTabPress}
              animation="rubberBand"
              useNativeDriver
              iterationCount={1}>
              <TextButtonHome>{labelName}</TextButtonHome>
            </ButtonTabsAnimate>
          );
        }
      })}
    </TabArea>
  );
};

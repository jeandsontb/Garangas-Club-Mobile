import React from 'react';
import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';

const TabArea = styled.View`
  flex-direction: row;
  background-color: #bf8756;
  height: 60px;
  display: ${props => (props.visible > 5 ? 'none' : 'flex')};
`;

const ButtonHome = styled.TouchableHighlight`
  position: absolute;
  z-index: 99;
  justify-content: center;
  align-items: center;
  width: ${props => (props.onActive === 0 ? 120 : 100)}px;
  height: 75px;
  background-color: #8c2f1b;
  margin-top: -20px;
  border-top-right-radius: 35px;
  border-bottom-right-radius: 35px;
`;

const TabAreaTabs = styled.View`
  flex: 1;
  flex-direction: row;
  padding-left: 115px;
  border: 2px solid #8c2f1b;
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

const TextTabs = styled.Text`
  text-align: center;
  margin-top: 5px;
  font-size: 11px;
  color: #fff;
  display: ${props => (props.onActive === true ? 'flex' : 'none')};
`;

const IconHome = styled.Image`
  width: ${props => (props.onActive === 0 ? 68 : 60)}px;
  height: ${props => (props.onActive === 0 ? 68 : 60)}px;
`;

//########################################################################## Fim Styled ######

const IconAnimatable = Animatable.createAnimatableComponent(IconHome);
const IconAnimate = Animatable.createAnimatableComponent(Icon);

export default ({state, navigation}) => {
  const route = nameRoute => {
    navigation.navigate(nameRoute, {resetView: state.index});
  };

  return (
    <TabArea visible={state.index}>
      <ButtonHome
        onPress={() => route('HomeGarangas')}
        underlayColor="none"
        onActive={state.index} //prop criada para pegar no styled
      >
        <IconAnimatable
          onActive={state.index} //prop criada para pegar no styled
          source={require('../../assets/logo.png')}
          animation="tada"
          useNativeDriver
          iterationCount={3}
        />
      </ButtonHome>

      <TabAreaTabs>
        <ButtonTabs
          onPress={() => route('CarSale')}
          underlayColor="transparent">
          <>
            <IconAnimate
              name="car"
              size={state.index === 1 ? 20 : 25}
              color="#FFF"
              animation="slideInLeft"
              useNativeDriver
              duration={1500}
              iterationCount={1}
            />
            <TextTabs onActive={state.index === 1 ? true : false}>
              Vendas
            </TextTabs>
          </>
        </ButtonTabs>

        <ButtonTabs
          onPress={() => route('History')}
          underlayColor="transparent">
          <>
            <IconAnimate
              name="history"
              size={state.index === 2 ? 20 : 25}
              color="#FFF"
              animation="slideInLeft"
              useNativeDriver
              duration={1500}
              iterationCount={1}
            />
            <TextTabs onActive={state.index === 2 ? true : false}>
              História
            </TextTabs>
          </>
        </ButtonTabs>

        <ButtonTabs
          onPress={() => route('Members')}
          underlayColor="transparent">
          <>
            <IconAnimate
              name="users"
              size={state.index === 3 ? 20 : 25}
              color="#FFF"
              animation="slideInLeft"
              useNativeDriver
              duration={1500}
              iterationCount={1}
            />
            <TextTabs onActive={state.index === 3 ? true : false}>
              Membros
            </TextTabs>
          </>
        </ButtonTabs>

        <ButtonTabs
          onPress={() => route('Projects')}
          underlayColor="transparent">
          <>
            <IconAnimate
              name="gavel"
              size={state.index === 4 ? 20 : 25}
              color="#FFF"
              animation="slideInLeft"
              useNativeDriver
              duration={1500}
              iterationCount={1}
            />
            <TextTabs onActive={state.index === 4 ? true : false}>
              Projetos
            </TextTabs>
          </>
        </ButtonTabs>

        <ButtonTabs
          onPress={() => route('Partners')}
          underlayColor="transparent">
          <>
            <IconAnimate
              name="male"
              size={state.index === 5 ? 20 : 25}
              color="#FFF"
              animation="slideInLeft"
              useNativeDriver
              duration={1500}
              iterationCount={1}
            />
            <TextTabs onActive={state.index === 5 ? true : false}>
              Parceiros
            </TextTabs>
          </>
        </ButtonTabs>
      </TabAreaTabs>
    </TabArea>
  );
};

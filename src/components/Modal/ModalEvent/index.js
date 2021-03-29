import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width, height} = Dimensions.get('window');

const Modal = styled.Modal`
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

const BoxContainer = styled.View`
  flex: 1;
  justify-content: center;
  width: ${width - 20}px;
  align-self: center;
`;

const Container = styled.View`
  background-color: #ffffff;
  width: 100%;
  border-radius: 10px;
  border: 2px;
  border-color: #ffffff;
`;

const BoxClose = styled.TouchableOpacity`
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  background-color: #ff0000;
  top: 5px;
  right: 5px;
  border-radius: 20px;
`;

const BoxEventImage = styled.View`
  width: 100%;
  height: 120px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;
`;

const EventImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const BoxTextsEvents = styled.View`
  padding-top: 15px;
  padding-bottom: 30px;
  padding-left: 10px;
  padding-right: 10px;
`;
const TextTitle = styled.Text`
  font-family: Roboto-Bold;
  font-size: 20px;
  color: #8c2f1b;
`;
const TextDescription = styled.Text`
  margin-top: 15px;
  font-family: Roboto-Regular;
  font-size: 16px;
  color: #8c2f1b;
`;
const TextDate = styled.Text`
    margin-top:15px
    font-family: Roboto-Medium;
    font-size: 14px;
    color: #8C2F1B;
`;

export default ({onEventVisible, visibleEventAction, dataEvent}) => {
  const handleModalClose = () => {
    visibleEventAction(false);
  };

  return (
    <Modal
      visible={onEventVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={() => visibleEventAction(false)}>
      <BoxContainer>
        <Container>
          <BoxEventImage>
            <EventImage source={{uri: dataEvent.img}} />
          </BoxEventImage>

          <BoxTextsEvents>
            <TextTitle>{dataEvent.title}</TextTitle>
            <TextDescription>{dataEvent.description}</TextDescription>
            <TextDate>{dataEvent.date}</TextDate>
          </BoxTextsEvents>

          <BoxClose onPress={handleModalClose}>
            <Icon name="times-circle" size={35} color="#FFF" />
          </BoxClose>
        </Container>
      </BoxContainer>
    </Modal>
  );
};

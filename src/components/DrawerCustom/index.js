import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import api from '../../services/api';

const DrawerArea = styled.View`
  flex: 1;
  background-color: #8c4f2b;
`;

const BoxDrawerLogo = styled.View`
  width: 100%;
  height: 120px;
  justify-content: center;
  align-items: center;
`;

const DrawerLogo = styled.Image`
  width: 100px;
  height: 90px;
`;

const BoxButtons = styled.View`
  flex: 1;
  background-color: #d7d7d9;
`;

const ScrollButtons = styled.ScrollView``;

const BoxButtonsChoice = styled.View`
  padding-top: 25px;
`;

const BoxMenu = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 35px;
  padding-left: 15px;
  /* background-color: #ff0000; */
`;

const BoxIcon = styled.View`
  width: 30px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const TextMenu = styled.Text`
  font-family: Roboto-Regular;
  font-size: 16px;
  color: #bf8756;
  margin-left: 15px;
`;

const Separator = styled.View`
  width: 100%;
  height: 1px;
  background-color: #bf8756;
  margin-top: 25px;
  margin-bottom: 25px;
`;

const BoxLogin = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 35px;
  padding-left: 15px;
`;

export default props => {
  const navigation = useNavigation();

  let verifyLogin = api.getToken();

  const [showButtonsMember, setShowButtonsMember] = useState(false);

  const menus = [
    {title: 'Vendas', icon: 'car', screen: 'CarSale'},
    {title: 'História', icon: 'history', screen: 'History'},
    {title: 'Membros', icon: 'users', screen: 'Members'},
    {title: 'Projetos', icon: 'gavel', screen: 'Projects'},
    {title: 'Parceiros', icon: 'male', screen: 'Partners'},
  ];

  useEffect(() => {
    let cancelEvent = true;

    if (cancelEvent) {
      const checkLogin = async () => {
        let token = await api.getToken();

        if (token) {
          let result = await api.validateToken();
          if (result.error === '') {
            setShowButtonsMember(true);
          } else {
            setShowButtonsMember(false);
          }
        } else {
          setShowButtonsMember(false);
        }
      };
      checkLogin();
    }

    return () => (cancelEvent = false);
  }, [verifyLogin]);

  const handleLogoutApplication = async () => {
    await api.logout();
    setShowButtonsMember(false);
  };

  return (
    <DrawerArea>
      <BoxDrawerLogo>
        <DrawerLogo source={require('../../assets/logo.png')} />
      </BoxDrawerLogo>

      <BoxButtons>
        <ScrollButtons>
          <BoxButtonsChoice>
            {menus.map((item, index) => (
              <BoxMenu
                key={index}
                onPress={() => navigation.navigate(item.screen)}>
                <BoxIcon>
                  <Icon name={item.icon} size={20} color="#BF8756" />
                </BoxIcon>
                <TextMenu>{item.title}</TextMenu>
              </BoxMenu>
            ))}
          </BoxButtonsChoice>

          <Separator />

          {!showButtonsMember && (
            <BoxLogin onPress={() => navigation.navigate('Login')}>
              <BoxIcon>
                <Icon name="user" size={20} color="#BF8756" />
              </BoxIcon>
              <TextMenu>Login</TextMenu>
            </BoxLogin>
          )}

          {showButtonsMember && (
            <>
              <BoxLogin onPress={() => navigation.navigate('MyProjects')}>
                <BoxIcon>
                  <Icon name="edit" size={20} color="#BF8756" />
                </BoxIcon>
                <TextMenu>Meus Projetos</TextMenu>
              </BoxLogin>

              <BoxLogin onPress={() => navigation.navigate('MyCarSale')}>
                <BoxIcon>
                  <Icon name="thumbs-up" size={20} color="#BF8756" />
                </BoxIcon>
                <TextMenu>Meus anúncios</TextMenu>
              </BoxLogin>

              <BoxLogin onPress={() => navigation.navigate('MyMembers')}>
                <BoxIcon>
                  <Icon name="user" size={20} color="#BF8756" />
                </BoxIcon>
                <TextMenu>Meu perfil</TextMenu>
              </BoxLogin>

              <BoxLogin onPress={handleLogoutApplication}>
                <BoxIcon>
                  <Icon name="arrow-left" size={20} color="#BF8756" />
                </BoxIcon>
                <TextMenu>Sair</TextMenu>
              </BoxLogin>
            </>
          )}
        </ScrollButtons>
      </BoxButtons>
    </DrawerArea>
  );
};

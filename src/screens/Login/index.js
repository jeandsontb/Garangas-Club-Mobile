import React, {useState} from 'react';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {useStateValue} from '../../contexts/StateContext';
import Styled from './style';
import api from '../../services/api';

export default () => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [showEye, setShowEye] = useState(false);

    const handleLoginSend = async () => {
        if (login && password) {
            let result = await api.login(login, password);

            if (result.error === '') {
                dispatch({
                    type: 'setToken',
                    payload: {
                        token: result.token,
                    },
                });

                dispatch({
                    type: 'setUser',
                    payload: {
                        user: result.user,
                    },
                });

                navigation.reset({
                    index: 1,
                    routes: [{name: 'TabHome'}],
                });
            } else {
                // eslint-disable-next-line no-alert
                alert(result.error);
            }
        } else {
            // eslint-disable-next-line no-sparse-arrays
            Alert.alert('Opss!', 'Preencha os campos Login / Senha', [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
                ,
            ]);
        }
    };

    return (
        <Styled.Container>
            <Styled.BoxButtonBack onPress={() => navigation.goBack()}>
                <Icon name="arrow-left" size={20} color="#8c2f1b" />
                <Styled.TextButtonBack>Voltar</Styled.TextButtonBack>
            </Styled.BoxButtonBack>

            <Styled.BoxImageContainer>
                <Styled.Logo source={require('../../assets/logo.png')} />
            </Styled.BoxImageContainer>

            <Styled.BoxFormContainer>
                <Styled.BoxInput>
                    <Styled.IconInput>
                        <Icon name="envelope" color="#8C2F1B" size={20} />
                    </Styled.IconInput>
                    <Styled.InputLogin
                        placeholderTextColor="#BF8756"
                        keyboardType="email-address"
                        placeholder="E-mail"
                        value={login}
                        onChangeText={e => setLogin(e)}
                    />
                </Styled.BoxInput>

                <Styled.BoxInput>
                    <Styled.IconInput>
                        <Icon name="envelope" color="#8C2F1B" size={20} />
                    </Styled.IconInput>
                    <Styled.InputPassword
                        placeholderTextColor="#BF8756"
                        secureTextEntry={showEye ? false : true}
                        placeholder="Senha"
                        value={password}
                        onChangeText={e => setPassword(e)}
                    />
                    <Styled.IconInputShowPasswordButton
                        onPress={() => setShowEye(!showEye)}>
                        <Icon
                            name={showEye ? 'eye-slash' : 'eye'}
                            color="#8C2F1B"
                            size={20}
                        />
                    </Styled.IconInputShowPasswordButton>
                </Styled.BoxInput>
            </Styled.BoxFormContainer>

            <Styled.BoxFormContainer>
                <Styled.ButtonSend onPress={handleLoginSend}>
                    <Styled.TextButton>Entrar</Styled.TextButton>
                    <Icon name="arrow-right" color="#f5fffa" size={20} />
                </Styled.ButtonSend>
            </Styled.BoxFormContainer>

            <Styled.BoxFormContainer>
                <Styled.BoxInformation>
                    <Styled.TextInformation>
                        <Styled.TextStrong>Observação:</Styled.TextStrong> Área
                        somente para os membros do Garangas Club, para acessar
                        basta solicitar o login e senha aos administradores do
                        grupo pelo whatsapp.
                    </Styled.TextInformation>
                </Styled.BoxInformation>
            </Styled.BoxFormContainer>
        </Styled.Container>
    );
};

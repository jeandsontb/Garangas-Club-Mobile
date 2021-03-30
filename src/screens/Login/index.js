import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Styled from './style';

export default () => {
    const navigation = useNavigation();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Styled.Container>
            <Styled.BoxLogo>
                <Styled.Logo source={require('../../assets/logo.png')} />
            </Styled.BoxLogo>

            <Styled.BoxForm>
                <Styled.InputLogin
                    keyboardType="email-address"
                    placeholder="E-mail"
                    value={user}
                    onChangeText={e => setUser(e)}
                />
                <Styled.InputLogin
                    secureTextEntry={true}
                    placeholder="Password"
                    value={password}
                    onChangeText={e => setPassword(e)}
                />

                <Styled.ButtonSend>
                    <Styled.TextButton>Entrar</Styled.TextButton>
                    <Icon name="arrow-right" color="#f5fffa" size={20} />
                </Styled.ButtonSend>

                <Styled.BoxInformation>
                    <Styled.TextInformation>
                        <Styled.TextStrong> Observação:</Styled.TextStrong> Área
                        somente para os membros do Garangas Club, para acessar
                        basta solicitar o login e senha aos administradores do
                        grupo pelo whatsapp.
                    </Styled.TextInformation>
                </Styled.BoxInformation>
            </Styled.BoxForm>

            <Styled.BoxButtonBack onPress={() => navigation.goBack()}>
                <Icon name="arrow-left" size={20} color="#8c2f1b" />
                <Styled.TextButtonBack>Voltar</Styled.TextButtonBack>
            </Styled.BoxButtonBack>
        </Styled.Container>
    );
};

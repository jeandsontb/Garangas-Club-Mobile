import React from 'react';
import {useNavigation} from '@react-navigation/native';

import Styled from './style';
import {useStateValue} from '../../contexts/StateContext';
import api from '../../services/api';

export default () => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    return (
        <Styled.Container>
            <Styled.Text>Tela de Membros</Styled.Text>
        </Styled.Container>
    );
};

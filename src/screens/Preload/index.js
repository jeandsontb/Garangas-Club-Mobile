import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import Styled from './style';
import api from '../../services/api';
import {useStateValue} from '../../contexts/StateContext';

export default () => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    useEffect(() => {
        let cancelPromise = true;

        const checkLogin = async () => {
            if (cancelPromise) {
                let token = await api.getToken();
                if (token) {
                    let result = await api.validateToken();
                    if (result.error === '') {
                        dispatch({
                            type: 'setUser',
                            payload: {
                                user: result.user,
                            },
                        });
                        navigation.reset({
                            index: 1,
                            routes: [{name: 'DrawerStack'}],
                        });
                    } else {
                        dispatch({
                            type: 'setToken',
                            payload: {
                                token: '',
                            },
                        });
                        navigation.reset({
                            index: 1,
                            routes: [{name: 'DrawerStack'}],
                        });
                    }
                } else {
                    navigation.reset({
                        index: 1,
                        routes: [{name: 'DrawerStack'}],
                    });
                }
            }
        };

        checkLogin();
        return () => (cancelPromise = false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Styled.Container>
            <Styled.LoadingIcon color="#8C2F1B" size="large" />
        </Styled.Container>
    );
};

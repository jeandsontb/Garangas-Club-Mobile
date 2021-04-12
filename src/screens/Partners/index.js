import React, {useState, useEffect} from 'react';
import {BackHandler} from 'react-native';
import {
    useNavigation,
    useRoute,
    useIsFocused,
    DrawerActions,
} from '@react-navigation/native';

import Styled from './style';
import api from '../../services/api';
import ProjectFake from '../../components/Skeleton/ProjectFake';

export default () => {
    const navigation = useNavigation();
    const route = useRoute();
    const focused = useIsFocused();

    const [loadingPartner, setLoadingPartner] = useState(false);
    const [dataPartner, setDataPartner] = useState([]);

    useEffect(() => {
        setDataPartner({});

        BackHandler.addEventListener('hardwareBackPress', () => {
            setDataPartner([]);
        });

        const CleanNavigator = navigation.addListener('focus', () => {
            getDataPartners();
        });

        return CleanNavigator;
    }, [navigation, route]);

    useEffect(() => {
        let cancelPromise = true;

        if (cancelPromise) {
            setDataPartner([]);
        }

        return () => (cancelPromise = false);
    }, [focused]); // Efeito para pegar a saída da tela por qualquer botão do modal tabButtonNavigator

    const getDataPartners = async () => {
        setDataPartner([]);
        setLoadingPartner(true);
        const result = await api.getPartner();
        setLoadingPartner(false);
        if (result.error === '') {
            setDataPartner(result.data);
        } else {
            // eslint-disable-next-line no-alert
            alert(result.error);
        }
    };

    return (
        <Styled.Container>
            <Styled.BoxIndicator>
                <Styled.BoxDrawer
                    onPress={() =>
                        navigation.dispatch(DrawerActions.openDrawer())
                    }>
                    <Styled.ImgDrawer
                        source={require('../../assets/iconDraw.png')}
                    />
                </Styled.BoxDrawer>
                <Styled.BoxTextInformation>
                    <Styled.TextInformation>PARCEIROS</Styled.TextInformation>
                </Styled.BoxTextInformation>
            </Styled.BoxIndicator>

            <Styled.ContentPartner>
                <Styled.ScrollPartner>
                    {loadingPartner && (
                        // eslint-disable-next-line react-native/no-inline-styles
                        <Styled.BoxImagePartner style={{height: 'auto'}}>
                            <ProjectFake />
                        </Styled.BoxImagePartner>
                    )}

                    {!loadingPartner &&
                        dataPartner.map((item, index) => (
                            <Styled.BoxImagePartner key={index}>
                                <Styled.ImagePartner
                                    source={{uri: item.photos}}
                                />
                            </Styled.BoxImagePartner>
                        ))}
                </Styled.ScrollPartner>
            </Styled.ContentPartner>
        </Styled.Container>
    );
};

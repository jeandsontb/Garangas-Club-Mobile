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
import HistoryFake from '../../components/Skeleton/HistoryFake';

export default () => {
    const navigation = useNavigation();
    const route = useRoute();
    const focused = useIsFocused();

    const [loadingHistory, setLoadingHistory] = useState(false);
    const [dataHistory, setDataHistoric] = useState({});

    useEffect(() => {
        setDataHistoric({});

        BackHandler.addEventListener('hardwareBackPress', () => {
            setDataHistoric({});
        });

        const CleanNavigator = navigation.addListener('focus', () => {
            getDataHistoric();
        });

        return CleanNavigator;
    }, [navigation, route]);

    useEffect(() => {
        let cancelPromise = true;

        if (cancelPromise) {
            setDataHistoric({});
        }

        return () => (cancelPromise = false);
    }, [focused]); // Efeito para pegar a saída da tela por qualquer botão do modal tabButtonNavigator

    const getDataHistoric = async () => {
        setDataHistoric({});
        setLoadingHistory(true);
        const result = await api.getHistoric();
        setLoadingHistory(false);
        if (result.error === '') {
            setDataHistoric(result.data);
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
                    <Styled.TextInformation>HISTÓRIA</Styled.TextInformation>
                </Styled.BoxTextInformation>
            </Styled.BoxIndicator>

            <Styled.BoxContent>
                <Styled.BoxHistory>
                    {loadingHistory && <HistoryFake />}

                    <Styled.BoxImageContent>
                        {!loadingHistory && dataHistory[0] !== undefined && (
                            <Styled.ImageContent
                                source={{uri: dataHistory[0].image}}
                            />
                        )}
                    </Styled.BoxImageContent>

                    {!loadingHistory && (
                        <Styled.BoxTextHistory>
                            <Styled.TextHistory>
                                Como tudo começou!
                            </Styled.TextHistory>
                            <Styled.Separator />
                        </Styled.BoxTextHistory>
                    )}

                    <Styled.BoxTextHistoryDescription>
                        <Styled.ScrollViewHistoryDescription>
                            {!loadingHistory &&
                                dataHistory[0] !== undefined && (
                                    <Styled.TextDescriptionHistory>
                                        {dataHistory[0].description}
                                    </Styled.TextDescriptionHistory>
                                )}
                        </Styled.ScrollViewHistoryDescription>
                    </Styled.BoxTextHistoryDescription>
                </Styled.BoxHistory>
            </Styled.BoxContent>
        </Styled.Container>
    );
};

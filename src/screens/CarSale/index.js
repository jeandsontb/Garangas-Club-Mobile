import React, {useState, useEffect} from 'react';
import {BackHandler} from 'react-native';
import {useNavigation, useRoute, useIsFocused} from '@react-navigation/native';

import Styled from './style';
import api from '../../services/api';
import ProjectFake from '../../components/Skeleton/ProjectFake';

export default () => {
    const navigation = useNavigation();
    const route = useRoute();
    const focused = useIsFocused();

    const [loadingCarSale, setLoadingCarSale] = useState(false);
    const [dataCarSale, setDataCarSale] = useState({});

    useEffect(() => {
        setDataCarSale({});

        BackHandler.addEventListener('hardwareBackPress', () => {
            setDataCarSale({});
        });

        const CleanNavigator = navigation.addListener('focus', () => {
            getDataCarSale();
        });

        return CleanNavigator;
    }, [navigation, route]);

    useEffect(() => {
        let cancelPromise = true;

        if (cancelPromise) {
            setDataCarSale({});
        }

        return () => (cancelPromise = false);
    }, [focused]); // Efeito para pegar a saída da tela por qualquer botão do modal tabButtonNavigator

    //######################################################## FUNÇÕES PARA API #################

    //############ DATA PARA PEGAR O PROJETO #################

    const getDataCarSale = async () => {
        setLoadingCarSale(true);
        const result = await api.getCarSale();
        setLoadingCarSale(false);
        if (result.error === '') {
            setDataCarSale(result.data);
        } else {
            // eslint-disable-next-line no-alert
            alert(result.error);
        }
    };

    //##################################################### FUNÇÕES OPERACIONAIS #################

    return (
        <Styled.Container>
            <Styled.BoxIndicator>
                <Styled.Text>CARROS À VENDA</Styled.Text>
            </Styled.BoxIndicator>

            <Styled.BoxContentCarSale>
                <Styled.ScrollBoxCarSale>
                    {loadingCarSale && <ProjectFake />}

                    {!loadingCarSale && dataCarSale.length === 0 && (
                        <Styled.InfoCarSaleNull>
                            <Styled.TextCarSaleNull>
                                Ops! Não existe no momento uma máquina do tempo
                                à venda.
                            </Styled.TextCarSaleNull>
                        </Styled.InfoCarSaleNull>
                    )}

                    {!loadingCarSale &&
                        dataCarSale.length > 0 &&
                        dataCarSale.map((data, index) => (
                            <Styled.BoxCarSale
                                key={index}
                                onPress={() =>
                                    navigation.navigate('ItensCarSale', {
                                        data,
                                        id: data.id,
                                    })
                                }>
                                <Styled.ImageCarSale
                                    source={{uri: data.cover}}
                                />
                                <Styled.BoxTitle>
                                    <Styled.TextTitle>
                                        {data.title}
                                    </Styled.TextTitle>
                                </Styled.BoxTitle>
                            </Styled.BoxCarSale>
                        ))}
                </Styled.ScrollBoxCarSale>
            </Styled.BoxContentCarSale>
        </Styled.Container>
    );
};

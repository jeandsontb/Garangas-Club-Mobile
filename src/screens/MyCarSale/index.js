import React, {useState, useEffect} from 'react';
import {BackHandler, Alert} from 'react-native';
import {useNavigation, useRoute, useIsFocused} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {useStateValue} from '../../contexts/StateContext';
import ProjectFake from '../../components/Skeleton/ProjectFake';
import api from '../../services/api';
import Styled from './style';

export default () => {
    const navigation = useNavigation();
    const route = useRoute();
    const focused = useIsFocused();

    const [context, dispatch] = useStateValue();

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navigation, route]);

    //############ DATA PARA PEGAR O PROJETO DO MEMBRO #################

    const getDataCarSale = async () => {
        setLoadingCarSale(true);

        const result = await api.getCarSaleMember(context.user.user.id);
        setLoadingCarSale(false);
        if (result.error === '') {
            setDataCarSale(result.data);
        } else {
            // eslint-disable-next-line no-alert
            alert(result.error);
        }
    };

    const handleConfirmRemoveCarSale = async id => {
        if (id) {
            let result = await api.removeCarSale(id);
            if (result.error === '') {
                getDataCarSale();
            } else {
                Alert.alert(
                    'Opss!',
                    'Erro ao excluir este veículo, tente novamente mais tarde.',
                    // eslint-disable-next-line no-sparse-arrays
                    [{text: 'OK', onPress: () => console.log('OK Pressed')}, ,],
                );
            }
        } else {
            Alert.alert(
                'Opss!',
                'Erro ao excluir este veículo, tente novamente mais tarde.',
                // eslint-disable-next-line no-sparse-arrays
                [{text: 'OK', onPress: () => console.log('OK Pressed')}, ,],
            );
        }
    };

    const handleRemoveCarSale = id => {
        Alert.alert(
            'VOCÊ QUER EXCLUIR ESSE VEÍCULO?',
            'Clique em confirmar para deletar este veículo para venda.',
            [
                {
                    text: 'Cancelar',
                    onPress: () => console.log('Cancel Pressed'),
                },
                {
                    text: 'Confirmar',
                    onPress: () => handleConfirmRemoveCarSale(id),
                },
            ],
        );
    };

    const handleEditCarSale = data => {
        navigation.navigate('EditCarSale', {data: data});
    };

    const handleBackView = () => {
        navigation.reset({
            index: 1,
            routes: [{name: 'TabHome'}],
        });
    };

    const handleAddCarSale = () => {
        navigation.navigate('AddCarSale');
    };

    return (
        <Styled.Container>
            <Styled.BoxIndicator>
                <Styled.BoxDrawer onPress={handleBackView}>
                    <Icon name="arrow-left" size={20} color="#FFF" />
                </Styled.BoxDrawer>
                <Styled.BoxTextInformation>
                    <Styled.TextInformation>MEUS CARROS</Styled.TextInformation>
                </Styled.BoxTextInformation>
                <Styled.ButtonAdd onPress={handleAddCarSale}>
                    <Icon name="plus-square" size={30} color="#FFF" />
                </Styled.ButtonAdd>
            </Styled.BoxIndicator>

            <Styled.BoxContentCarSale>
                <Styled.ScrollBoxCarSale>
                    {loadingCarSale && <ProjectFake />}

                    {!loadingCarSale &&
                        dataCarSale.length > 0 &&
                        dataCarSale.map((data, index) => (
                            <Styled.BoxCarSaleMember key={index}>
                                <Styled.BoxCarSale
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
                                            {data.name}
                                        </Styled.TextTitle>
                                    </Styled.BoxTitle>
                                </Styled.BoxCarSale>

                                <Styled.BoxButtonsOptions>
                                    <Styled.ButtonImageEdit
                                        onPress={() => handleEditCarSale(data)}>
                                        <Icon
                                            name="edit"
                                            size={25}
                                            color="#FFF"
                                        />
                                    </Styled.ButtonImageEdit>

                                    <Styled.ButtonImageDelete
                                        onPress={() =>
                                            handleRemoveCarSale(data.id)
                                        }>
                                        <Icon
                                            name="trash"
                                            size={25}
                                            color="#FFF"
                                        />
                                    </Styled.ButtonImageDelete>
                                </Styled.BoxButtonsOptions>
                            </Styled.BoxCarSaleMember>
                        ))}
                </Styled.ScrollBoxCarSale>
            </Styled.BoxContentCarSale>
        </Styled.Container>
    );
};

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

    const [loadingMember, setLoadingMember] = useState(false);
    const [dataMember, setDataMember] = useState({});

    useEffect(() => {
        setDataMember({});

        BackHandler.addEventListener('hardwareBackPress', () => {
            setDataMember({});
        });

        const CleanNavigator = navigation.addListener('focus', () => {
            getDataMember();
        });

        return CleanNavigator;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navigation, route]);

    //############ DATA PARA PEGAR O PROJETO DO MEMBRO #################

    const getDataMember = async () => {
        setLoadingMember(true);

        const result = await api.getUserMember(context.user.user.id);
        setLoadingMember(false);
        if (result.error === '') {
            setDataMember(result.data);
        } else {
            // eslint-disable-next-line no-alert
            alert(result.error);
        }
    };

    const handleConfirmRemoveMember = async id => {
        if (id) {
            let result = await api.removeMember(id);
            if (result.error === '') {
                getDataMember();
            } else {
                Alert.alert(
                    'Opss!',
                    'Erro ao excluir membro, tente novamente mais tarde.',
                    // eslint-disable-next-line no-sparse-arrays
                    [{text: 'OK', onPress: () => console.log('OK Pressed')}, ,],
                );
            }
        } else {
            Alert.alert(
                'Opss!',
                'Erro ao excluir membro, tente novamente mais tarde.',
                // eslint-disable-next-line no-sparse-arrays
                [{text: 'OK', onPress: () => console.log('OK Pressed')}, ,],
            );
        }
    };

    const handleRemoveMember = id => {
        Alert.alert(
            'VOCÊ QUER EXCLUIR ESSE PERFIL?',
            'Clique em confirmar para deletar o perfil.',
            [
                {
                    text: 'Cancelar',
                    onPress: () => console.log('Cancel Pressed'),
                },
                {
                    text: 'Confirmar',
                    onPress: () => handleConfirmRemoveMember(id),
                },
            ],
        );
    };

    const handleEditMember = data => {
        navigation.navigate('EditMembers', {data: data});
    };

    const handleBackView = () => {
        navigation.reset({
            index: 1,
            routes: [{name: 'TabHome'}],
        });
    };

    const handleAddMember = () => {
        navigation.navigate('AddMembers');
    };

    return (
        <Styled.Container>
            <Styled.BoxIndicator>
                <Styled.BoxDrawer onPress={handleBackView}>
                    <Icon name="arrow-left" size={20} color="#FFF" />
                </Styled.BoxDrawer>
                <Styled.BoxTextInformation>
                    <Styled.TextInformation>MEU PERFIL</Styled.TextInformation>
                </Styled.BoxTextInformation>
                <Styled.ButtonAdd onPress={handleAddMember}>
                    <Icon name="plus-square" size={30} color="#FFF" />
                </Styled.ButtonAdd>
            </Styled.BoxIndicator>

            <Styled.BoxContentMember>
                <Styled.ScrollBoxMember>
                    {loadingMember && <ProjectFake />}

                    {!loadingMember &&
                        dataMember.length > 0 &&
                        dataMember.map((data, index) => (
                            <Styled.BoxProjectMember key={index}>
                                <Styled.BoxMember
                                    onPress={() =>
                                        navigation.navigate('ItensMember', {
                                            data,
                                            id: data.id,
                                        })
                                    }>
                                    <Styled.ImageMember
                                        source={{uri: data.cover}}
                                    />
                                    <Styled.BoxTitle>
                                        <Styled.TextTitle>
                                            {data.name}
                                        </Styled.TextTitle>
                                    </Styled.BoxTitle>
                                </Styled.BoxMember>

                                <Styled.BoxButtonsOptions>
                                    <Styled.ButtonImageEdit
                                        onPress={() => handleEditMember(data)}>
                                        <Icon
                                            name="edit"
                                            size={25}
                                            color="#FFF"
                                        />
                                    </Styled.ButtonImageEdit>

                                    <Styled.ButtonImageDelete
                                        onPress={() =>
                                            handleRemoveMember(data.id)
                                        }>
                                        <Icon
                                            name="trash"
                                            size={25}
                                            color="#FFF"
                                        />
                                    </Styled.ButtonImageDelete>
                                </Styled.BoxButtonsOptions>
                            </Styled.BoxProjectMember>
                        ))}
                </Styled.ScrollBoxMember>
            </Styled.BoxContentMember>
        </Styled.Container>
    );
};

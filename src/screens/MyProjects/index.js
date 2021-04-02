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

    const [loadingProject, setLoadingProject] = useState(false);
    const [dataProject, setDataProject] = useState({});

    useEffect(() => {
        setDataProject({});

        BackHandler.addEventListener('hardwareBackPress', () => {
            setDataProject({});
        });

        const CleanNavigator = navigation.addListener('focus', () => {
            getDataProject();
        });

        return CleanNavigator;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navigation, route]);

    //############ DATA PARA PEGAR O PROJETO DO MEMBRO #################

    const getDataProject = async () => {
        setLoadingProject(true);

        const result = await api.getProjectsMember(context.user.user.id);
        setLoadingProject(false);
        if (result.error === '') {
            setDataProject(result.data);
        } else {
            // eslint-disable-next-line no-alert
            alert(result.error);
        }
    };

    const handleConfirmRemoveProject = async id => {
        if (id) {
            let result = await api.removeProject(id);
            if (result.error === '') {
                getDataProject();
            } else {
                Alert.alert(
                    'Opss!',
                    'Erro ao excluir projeto, tente novamente mais tarde.',
                    // eslint-disable-next-line no-sparse-arrays
                    [{text: 'OK', onPress: () => console.log('OK Pressed')}, ,],
                );
            }
        } else {
            Alert.alert(
                'Opss!',
                'Erro ao excluir projeto, tente novamente mais tarde.',
                // eslint-disable-next-line no-sparse-arrays
                [{text: 'OK', onPress: () => console.log('OK Pressed')}, ,],
            );
        }
    };

    const handleRemoveProject = id => {
        Alert.alert(
            'VOCÊ QUER EXCLUIR ESSE PROJETO?',
            'Clique em confirmar para deletar o projeto.',
            [
                {
                    text: 'Cancelar',
                    onPress: () => console.log('Cancel Pressed'),
                },
                {
                    text: 'Confirmar',
                    onPress: () => handleConfirmRemoveProject(id),
                },
            ],
        );
    };

    const handleEditProject = data => {
        navigation.navigate('Edit', {data: data});
    };

    const handleBackView = () => {
        navigation.reset({
            index: 1,
            routes: [{name: 'TabHome'}],
        });
    };

    const handleAddProject = () => {
        navigation.navigate('Add');
    };

    return (
        <Styled.Container>
            <Styled.BoxIndicator>
                <Styled.BoxDrawer onPress={handleBackView}>
                    <Icon name="arrow-left" size={20} color="#FFF" />
                </Styled.BoxDrawer>
                <Styled.BoxTextInformation>
                    <Styled.TextInformation>
                        MEUS PROJETOS
                    </Styled.TextInformation>
                </Styled.BoxTextInformation>
                <Styled.ButtonAdd onPress={handleAddProject}>
                    <Icon name="plus-square" size={30} color="#FFF" />
                </Styled.ButtonAdd>
            </Styled.BoxIndicator>

            <Styled.BoxContentProjects>
                <Styled.ScrollBoxProject>
                    {loadingProject && <ProjectFake />}

                    {!loadingProject &&
                        dataProject.length > 0 &&
                        dataProject.map((data, index) => (
                            <Styled.BoxProjectMember key={index}>
                                <Styled.BoxProject
                                    onPress={() =>
                                        navigation.navigate('ItensProject', {
                                            data,
                                            id: data.id,
                                        })
                                    }>
                                    <Styled.ImageProject
                                        source={{uri: data.cover}}
                                    />
                                    <Styled.BoxTitle>
                                        <Styled.TextTitle>
                                            {data.name}
                                        </Styled.TextTitle>
                                    </Styled.BoxTitle>
                                </Styled.BoxProject>

                                <Styled.BoxButtonsOptions>
                                    <Styled.ButtonImageEdit
                                        onPress={() => handleEditProject(data)}>
                                        <Icon
                                            name="edit"
                                            size={25}
                                            color="#FFF"
                                        />
                                    </Styled.ButtonImageEdit>

                                    <Styled.ButtonImageDelete
                                        onPress={() =>
                                            handleRemoveProject(data.id)
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
                </Styled.ScrollBoxProject>
            </Styled.BoxContentProjects>
        </Styled.Container>
    );
};

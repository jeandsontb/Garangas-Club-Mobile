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
    }, [navigation, route]);

    useEffect(() => {
        let cancelPromise = true;

        if (cancelPromise) {
            setDataProject({});
        }

        return () => (cancelPromise = false);
    }, [focused]); // Efeito para pegar a saída da tela por qualquer botão do modal tabButtonNavigator

    //######################################################## FUNÇÕES PARA API #################

    //############ DATA PARA PEGAR O PROJETO #################

    const getDataProject = async () => {
        setLoadingProject(true);
        const result = await api.getProjects();
        setLoadingProject(false);
        if (result.error === '') {
            setDataProject(result.data);
        } else {
            // eslint-disable-next-line no-alert
            alert(result.error);
        }
    };

    //##################################################### FUNÇÕES OPERACIONAIS #################

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
                    <Styled.TextInformation>PROJETOS</Styled.TextInformation>
                </Styled.BoxTextInformation>
            </Styled.BoxIndicator>

            <Styled.BoxContentProjects>
                <Styled.ScrollBoxProject>
                    {loadingProject && <ProjectFake />}

                    {!loadingProject &&
                        dataProject.length > 0 &&
                        dataProject.map((data, index) => (
                            <Styled.BoxProject
                                key={index}
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
                        ))}
                </Styled.ScrollBoxProject>
            </Styled.BoxContentProjects>
        </Styled.Container>
    );
};

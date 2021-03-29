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
    }, [navigation, route]);

    useEffect(() => {
        let cancelPromise = true;

        if (cancelPromise) {
            setDataMember({});
        }

        return () => (cancelPromise = false);
    }, [focused]); // Efeito para pegar a saída da tela por qualquer botão do modal tabButtonNavigator

    //######################################################## FUNÇÕES PARA API #################

    //############ DATA PARA PEGAR O PROJETO #################

    const getDataMember = async () => {
        setLoadingMember(true);
        const result = await api.getMembers();
        setLoadingMember(false);
        if (result.error === '') {
            setDataMember(result.data);
        } else {
            // eslint-disable-next-line no-alert
            alert(result.error);
        }
    };

    //##################################################### FUNÇÕES OPERACIONAIS #################

    return (
        <Styled.Container>
            <Styled.BoxIndicator>
                <Styled.Text>MEMBROS</Styled.Text>
            </Styled.BoxIndicator>

            <Styled.BoxContentMember>
                <Styled.ScrollBoxMember>
                    {loadingMember && <ProjectFake />}

                    {!loadingMember &&
                        dataMember.length > 0 &&
                        dataMember.map((data, index) => (
                            <Styled.BoxMember
                                key={index}
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
                        ))}
                </Styled.ScrollBoxMember>
            </Styled.BoxContentMember>
        </Styled.Container>
    );
};

import React, {useState, useEffect} from 'react';
import {BackHandler, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import api, {UrlApi} from '../../../services/api';
import ProjectItensFake from '../../../components/Skeleton/ProjectItensFake';

const Container = styled.View`
    background-color: #d7d7d9;
`;

const BoxButton = styled.TouchableOpacity`
    position: absolute;
    align-items: center;
    justify-content: center;
    z-index: 99;
    top: 6px;
    left: 10px;
    width: 60px;
    height: 30px;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 55px;
`;

const BoxBackgroundImage = styled.View``;

const BackgroundImage = styled.Image`
    width: 100%;
    height: 240px;
`;

const BoxThumbImages = styled.ScrollView`
    width: 100%;
    padding-top: 8px;
    padding-left: 10px;
    padding-right: 10px;
`;

const ButtonThumbImages = styled.TouchableOpacity`
    margin-right: 4px;
    width: 60px;
    height: 90px;
    border-radius: 4px;
    overflow: hidden;
`;
const ThumbImages = styled.Image`
    width: 100%;
    height: 100%;
    opacity: ${props => props.ImageFocus};
`;

const BoxDetailMember = styled.View`
    background-color: #f5fffa;
    border-radius: 6px;
    margin-top: 20px;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 25px;
    padding: 10px;
`;

const TextProperty = styled.Text`
    font-family: TrainOne-Regular;
    font-size: 22px;
    color: #8c2f1b;
`;

const BoxDescriptionText = styled.ScrollView`
    margin-top: 10px;
    height: ${props => props.height}px;
`;

const TextTitle = styled.Text`
    font-family: Roboto-Thin;
    font-size: 18px;
    color: #8c2f1b;
`;
const TextDescription = styled.Text`
    font-family: Roboto-Regular;
    font-size: 16px;
    color: #8c2f1b;
    text-align: justify;
`;

export default () => {
    const navigation = useNavigation();
    const route = useRoute();
    const URL = UrlApi();

    const {height} = Dimensions.get('window');

    const [loadingMember, setLoadingMember] = useState(false);
    const [dataMember, setDataMember] = useState({});
    const [activeImage, setActiveImage] = useState('');

    useEffect(() => {
        setDataMember({});

        BackHandler.addEventListener('hardwareBackPress', () => {
            setActiveImage('');
            setDataMember({});
        });

        const CleanNavigator = navigation.addListener('focus', () => {
            getDataMemberId();
        });

        return CleanNavigator;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navigation, route]);

    //######################################################## FUNÇÕES PARA API #################

    //############ DATA PARA PEGAR O MEMBER #################

    const getDataMemberId = async () => {
        setLoadingMember(true);
        const result = await api.getMemberId(route.params?.id);
        setLoadingMember(false);
        if (result.error === '') {
            setDataMember(result.data);
        } else {
            // eslint-disable-next-line no-alert
            alert(result.error);
        }
    };

    //##################################################### FUNÇÕES OPERACIONAIS #################

    const handleThumbActiveImage = image => {
        setActiveImage(image);
    };

    const handleBackView = () => {
        setActiveImage('');
        setDataMember({});
        navigation.goBack();
    };

    //######################################################## INÍCIO DO RETORNO #################

    return (
        <Container>
            <BoxBackgroundImage>
                <BoxButton onPress={handleBackView}>
                    <Icon name="arrow-left" color="#FFF" size={20} />
                </BoxButton>

                {loadingMember && <ProjectItensFake />}

                {!loadingMember && dataMember[0] !== undefined && (
                    <BackgroundImage
                        source={{
                            uri:
                                activeImage === ''
                                    ? dataMember[0].cover
                                    : `${URL}${activeImage}`,
                        }}
                    />
                )}

                <BoxThumbImages horizontal={true}>
                    {!loadingMember &&
                        dataMember[0] !== undefined &&
                        dataMember[0].photos.map((data, index) => (
                            <ButtonThumbImages
                                key={index}
                                onPress={() => handleThumbActiveImage(data)}>
                                <ThumbImages
                                    source={{uri: `${URL}${data}`}}
                                    ImageFocus={data === activeImage ? 0.4 : 1}
                                />
                            </ButtonThumbImages>
                        ))}
                </BoxThumbImages>

                {!loadingMember && dataMember[0] !== undefined && (
                    <BoxDetailMember>
                        <TextProperty>{dataMember[0].name}</TextProperty>
                        <BoxDescriptionText height={height - 450}>
                            <TextTitle>{dataMember[0].title}</TextTitle>
                            <TextDescription>
                                {dataMember[0].description}
                            </TextDescription>
                        </BoxDescriptionText>
                    </BoxDetailMember>
                )}
            </BoxBackgroundImage>
        </Container>
    );
};

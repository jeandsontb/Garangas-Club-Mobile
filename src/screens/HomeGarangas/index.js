import React from 'react';
import {StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Styled from './style';
import {useStateValue} from '../../contexts/StateContext';
import api from '../../services/api';

export default () => {
    const navigation = useNavigation();
    const [context, dispatch] = useStateValue();

    //########################################## PEGA A URL DO LINK E URL DO VÍDEO ###############

    const url = 'https://www.youtube.com/watch?v=VfpwNQoKhoQ&t';

    function getYouTubeId(youtubeURL) {
        return youtubeURL.replace(
            /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
            '$7',
        );
    }

    const youTubeID = getYouTubeId(url);
    const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;
    const movieUrl = `https://www.youtube.com/embed/${youTubeID}`;

    //########################################## PEGA A URL DO LINK E URL DO VÍDEO ###############

    return (
        <Styled.Container>
            <StatusBar barStyle="light-content" backgroundColor="#8c4f2b" />

            <Styled.ImageTop
                source={require('../../assets/fusca.png')}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{resizeMode: 'cover'}}
            />
            <Styled.BoxTop />

            <Styled.BoxHeaderImageLogo>
                <Styled.HeaderImageLogo
                    source={require('../../assets/logo.png')}
                />
            </Styled.BoxHeaderImageLogo>

            <Styled.BoxHeader>
                <Styled.HeaderText>
                    Econtro com os amigos Celta Clube nas cidade de gravata em
                    34 do 6 de 2021
                </Styled.HeaderText>

                <Styled.BoxHeaderImage
                    onPress={() => {}}
                    underlayColor="transparent">
                    <>
                        <Styled.HeaderBorderImage>
                            <Styled.HeaderImage
                                // eslint-disable-next-line react-native/no-inline-styles
                                style={{resizeMode: 'cover'}}
                                source={{
                                    uri: bgUrl,
                                }}
                            />
                        </Styled.HeaderBorderImage>
                        <Styled.HeaderImagePlay
                            source={require('../../assets/play.png')}
                        />
                    </>
                </Styled.BoxHeaderImage>
            </Styled.BoxHeader>

            <Styled.BoxContent>
                <Styled.Text>...</Styled.Text>
            </Styled.BoxContent>
        </Styled.Container>
    );
};

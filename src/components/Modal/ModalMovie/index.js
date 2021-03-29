import React from 'react';
import {Modal} from 'react-native';
import styled from 'styled-components/native';
import YouTubePlayer from 'react-native-youtube-sdk';
import Icon from 'react-native-vector-icons/FontAwesome';

const Box = styled.View`
    background-color: rgba(191, 135, 86, 0.8);
    width: 100%;
    height: 100%;
    align-self: center;
`;

const BoxContent = styled.View`
    width: 100%;
    height: auto;
    background-color: #fff;
`;

const BoxClose = styled.View`
    background-color: rgba(191, 135, 86, 1);
    align-items: center;
    padding: 10px;
    width: 100%;
`;

const ButtonClose = styled.TouchableHighlight`
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    width: 50px;
    height: 50px;
`;

const Text = styled.Text`
    font-family: Roboto-Medium;
    font-size: 18px;
    color: #fff;
`;

const Movie = styled.View`
    width: 100%;
`;

export default ({onVisible, visibleAction, movie}) => {
    const handleModalClose = () => {
        visibleAction(false);
    };

    return (
        <>
            <Modal
                visible={onVisible}
                animationType="fade"
                transparent={true}
                onRequestClose={() => visibleAction(false)}>
                <Box>
                    <BoxContent>
                        <BoxClose>
                            <ButtonClose
                                onPress={handleModalClose}
                                underlayColor="transparent">
                                <Icon
                                    name="times-circle"
                                    size={35}
                                    color="#FFF"
                                />
                            </ButtonClose>
                        </BoxClose>
                        <Movie>
                            <YouTubePlayer
                                ref={ref => (this.youTubePlayer = ref)}
                                videoId={movie}
                                autoPlay={true}
                                fullscreen={false}
                                showFullScreenButton={true}
                                showSeekBar={false}
                                showPlayPauseButton={true}
                                startTime={5}
                                // eslint-disable-next-line react-native/no-inline-styles
                                style={{width: '100%', height: 200}}
                                onError={e => console.log(e)}
                                onChangeState={e => console.log(e)}
                                onChangeFullscreen={e => console.log(e)}
                            />
                        </Movie>
                    </BoxContent>
                </Box>
            </Modal>
        </>
    );
};

import React from 'react';
import {Modal} from 'react-native';
import styled from 'styled-components/native';

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

const BoxClose = styled.TouchableOpacity`
    background-color: rgba(191, 135, 86, 1);
    align-items: center;
    padding: 15px;
    width: 100%;
`;

const Text = styled.Text`
    font-family: Roboto-Medium;
    font-size: 18px;
    color: #fff;
`;

export default ({onVisible, visibleAction}) => {
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
                        <BoxClose onPress={handleModalClose}>
                            <Text>FECHAR VÍDEO</Text>
                        </BoxClose>
                        <Text>...</Text>
                    </BoxContent>
                </Box>
            </Modal>
        </>
    );
};

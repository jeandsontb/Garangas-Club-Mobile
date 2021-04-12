import styled from 'styled-components/native';

export default {
    Container: styled.View`
        flex: 1;
        justify-content: center;
        align-items: center;
        background-color: #8c4f2b;
    `,
    LoadingIcon: styled.ActivityIndicator``,

    ImageLogoPreload: styled.Image`
        width: 120px;
        height: 110px;
    `,

    TextLogo: styled.View`
        align-items: center;
        margin-top: 20px;
    `,

    Text: styled.Text`
        font-family: TrainOne-Regular;
        font-size: 28px;
        color: #fff;
    `,
};

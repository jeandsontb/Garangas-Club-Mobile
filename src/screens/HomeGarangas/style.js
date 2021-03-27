import styled from 'styled-components/native';

export default {
    Container: styled.View`
        flex: 1;
    `,
    ImageTop: styled.Image`
        width: 100%;
        height: 380px;
    `,
    BoxTop: styled.View`
        position: absolute;
        background-color: rgba(191, 135, 86, 0.5);
        height: 380px;
        width: 100%;
    `,

    BoxHeader: styled.View`
        width: 100%;
        align-items: center;
    `,

    HeaderText: styled.Text`
        color: #fff;
        font-size: 16px;
        padding-left: 10px;
        padding-right: 10px;
    `,

    BoxHeaderImageLogo: styled.View`
        align-items: flex-end;
        padding: 5px;
        margin-top: -380px;
        width: 100%;
    `,

    HeaderImageLogo: styled.Image`
        width: 120px;
        height: 110px;
    `,

    BoxHeaderImage: styled.TouchableHighlight`
        margin-top: 10px;
    `,
    HeaderBorderImage: styled.View`
        border: 2px;
        width: 220px;
        height: 120px;
        border-color: #fff;
        border-radius: 10px;
    `,

    HeaderImage: styled.Image`
        width: 100%;
        height: 100%;
        border-radius: 10px;
    `,
    HeaderImagePlay: styled.Image`
        width: 30px;
        height: 30px;
        margin-top: -80px;
        margin-left: 95px;
    `,

    HeaderImageMovie: styled.Text``,

    BoxContent: styled.ScrollView`
        flex: 1;
        border-top-right-radius: 60px;
        margin-top: 65px;
        background-color: #bf8756;
    `,

    Text: styled.Text``,
};

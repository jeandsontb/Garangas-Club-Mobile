import styled from 'styled-components/native';

export default {
    Container: styled.View`
        flex: 1;
    `,

    BoxButtonDrawer: styled.View`
        position: absolute;
        z-index: 99;
        margin-left: 15px;
        margin-top: 15px;
        width: 40px;
        height: 40px;
    `,

    ButtonDrawer: styled.TouchableOpacity``,

    IconButtonOpenDraw: styled.Image`
        width: 100%;
        height: 100%;
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
        font-family: Roboto-Medium;
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

    BoxHeaderImagePlay: styled.View`
        width: 32px;
        height: 32px;
        margin-top: -76px;
        margin-left: 95px;
        background-color: #ff0000;
        border-radius: 16px;
        justify-content: center;
        align-items: center;
    `,

    BoxContent: styled.View`
        flex: 1;
        border-top-right-radius: 60px;
        margin-top: 65px;
        background-color: #d7d7d9;
        padding: 10px;
    `,

    ContentText: styled.Text`
        font-family: TrainOne-Regular;
        font-size: 22px;
        color: #8c2f1b;
    `,

    ContentTextLine: styled.View`
        width: 80%;
        height: 3px;
        background-color: #8c2f1b;
        border-radius: 2px;
    `,

    BoxEvents: styled.ScrollView`
        margin-top: 10px;
    `,

    BoxEventsDetail: styled.TouchableOpacity`
        flex-direction: row;
        background-color: #f5fffa;
        width: 100%;
        height: auto;
        padding: 10px;
        border-radius: 10px;
        margin-top: 10px;
    `,

    EventImage: styled.Image`
        width: 110px;
        height: 80px;
        border-radius: 6px;
    `,

    BoxRightEvents: styled.View`
        flex: 1;
        margin-left: 10px;
    `,

    ContentTitle: styled.Text`
        color: #8c2f1b;
        font-family: Roboto-Bold;
        font-size: 18px;
    `,

    ContentDate: styled.Text`
        color: #8c2f1b;
        font-family: Roboto-Medium;
        font-size: 12px;
    `,

    BoxProject: styled.View`
        background-color: #d7d7d9;
        width: 100%;
        padding-bottom: 20px;
        padding-top: 20px;
    `,

    BoxScrollProjects: styled.ScrollView``,

    BoxCoverProject: styled.TouchableOpacity`
        margin-right: 10px;
        margin-top: 20px;
        width: 110px;
        height: 160px;
    `,

    CoverProject: styled.Image`
        position: absolute;
        border-radius: 6px;
        width: 100%;
        height: 100%;
    `,

    BoxNameProject: styled.View`
        margin-top: 15px;
        border-top-right-radius: 60px;
        padding-left: 4px;
        padding-bottom: 2px;
        background-color: rgba(140, 47, 27, 0.9);
        max-width: 95%;
    `,

    NameProject: styled.Text`
        font-family: Roboto-Regular;
        color: #fff;
        font-size: 10px;
    `,
};

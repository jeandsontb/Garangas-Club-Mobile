import styled from 'styled-components/native';

export default {
    Container: styled.View`
        flex: 1;
    `,

    BoxIndicator: styled.View`
        flex-direction: row;
        width: 100%;
        height: 60px;
        background-color: #bf8756;
        align-items: center;
    `,

    BoxDrawer: styled.TouchableOpacity`
        width: 60px;
        height: 60px;
        justify-content: center;
        align-items: center;
    `,

    ImgDrawer: styled.Image`
        width: 30px;
        height: 30px;
    `,

    BoxTextInformation: styled.View`
        flex: 1;
        align-items: center;
        margin-left: -60px;
    `,

    TextInformation: styled.Text`
        color: #fff;
        font-size: 20px;
        font-family: TrainOne-Regular;
    `,

    BoxContentProjects: styled.View`
        flex: 1;
        padding-top: 10px;
        padding-bottom: 20px;
        background-color: #d7d7d9;
    `,

    ScrollBoxProject: styled.ScrollView`
        padding-left: 15px;
        padding-right: 15px;
    `,

    BoxProject: styled.TouchableOpacity`
        margin-bottom: 10px;
        width: 100%;
        height: 130px;
        border-radius: 10px;
        overflow: hidden;
    `,

    ImageProject: styled.Image`
        width: 100%;
        height: 100%;
    `,

    BoxTitle: styled.View`
        position: absolute;
        top: 5px;
        left: 5px;
        width: 85%;
        height: 35px;
        background-color: rgba(140, 47, 27, 0.85);
        border-top-right-radius: 30px;
        padding-left: 10px;
    `,

    TextTitle: styled.Text`
        font-family: Roboto-Medium;
        font-size: 18px;
        color: #fff;
    `,
};
